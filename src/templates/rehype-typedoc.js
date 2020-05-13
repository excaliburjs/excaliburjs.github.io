import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/abstract'

const TYPEDOC_SYMBOL_LINK_REGEXP = /\[\[([^\]]+)\]\]/gi

const SYMBOL_CONTAINERS = [
  ReflectionKind.Class,
  ReflectionKind.Interface,
  ReflectionKind.Enum,
  ReflectionKind.Module,
  ReflectionKind.SomeModule,
  ReflectionKind.ExternalModule,
]

const SYMBOL_LINK_KINDS = [
  ReflectionKind.Enum,
  ReflectionKind.EnumMember,
  ReflectionKind.Class,
  ReflectionKind.Interface,
  ReflectionKind.Constructor,
  ReflectionKind.Property,
  ReflectionKind.Method,
  ReflectionKind.Accessor,
  ReflectionKind.Function,
  ReflectionKind.TypeAlias,
  ReflectionKind.ObjectLiteral,
]

/**
 * Builds a lookup of symbol expressions to links for fast lookups
 * @param {AST} typedoc
 */
export function buildSymbolLinkIndex(node, parents = [], lookup = new Map()) {
  if (node.children && node.children.length) {
    node.children.forEach((n) => {
      if (
        !SYMBOL_LINK_KINDS.includes(n.kind) &&
        !SYMBOL_CONTAINERS.includes(n.kind)
      ) {
        return
      }
      buildSymbolLinkIndex(n, [...parents, node], lookup)
    })
  }

  const symbolExpression = [...parents, node].reduce((expr, n) => {
    if (!SYMBOL_LINK_KINDS.includes(n.kind)) {
      return expr
    }

    const separator = expr.length > 0 ? '.' : ''

    switch (n.kind) {
      case ReflectionKind.Constructor:
        return expr + '#ctor'
      case ReflectionKind.Function:
        return n.name
      default:
        return expr + separator + n.name
    }
  }, '')

  const symbolPath = [...parents, node].map((n) => [n.name, n.kind])

  if (symbolExpression.length && !lookup.has(symbolExpression)) {
    lookup.set(symbolExpression, symbolPath)
  }

  return lookup
}

export function generateLinkFromSymbol(symbolPath, basePath, symbolLinkIndex) {
  let symbolLink = undefined

  const symbolMatches = symbolLinkIndex.has(symbolPath)
    ? symbolLinkIndex.get(symbolPath)
    : []

  if (symbolMatches && symbolMatches.length) {
    const [, containerKind] = symbolMatches
      .concat([])
      .reverse()
      .find(([, kind]) => SYMBOL_CONTAINERS.includes(kind)) || [
      undefined,
      undefined,
    ]

    let containerPath

    switch (containerKind) {
      case ReflectionKind.Class:
        containerPath = 'classes/'
        break
      case ReflectionKind.Interface:
        containerPath = 'interfaces/'
        break
      case ReflectionKind.SomeModule:
      case ReflectionKind.ExternalModule:
      case ReflectionKind.Module:
        containerPath = 'modules/'
        break
      case ReflectionKind.Enum:
        containerPath = 'enums/'
        break
      default:
        containerPath = ''
    }

    // assemble file url
    symbolLink = symbolMatches.reduce(
      (path, [matchSymbolName, matchSymbolKind]) => {
        switch (matchSymbolKind) {
          case 0:
            break
          case ReflectionKind.SomeModule:
          case ReflectionKind.ExternalModule:
          case ReflectionKind.Module:
            path += matchSymbolName.replace(/[^a-z0-9]/gi, '_') + '.'
            break
          case ReflectionKind.Class:
          case ReflectionKind.Interface:
          case ReflectionKind.Enum:
            path += matchSymbolName
            break
          default:
            path += '#' + matchSymbolName
            break
        }

        if (matchSymbolKind === containerKind) {
          path += (path.endsWith('.') ? '' : '.') + 'html'
        }

        return path.toLowerCase()
      },
      basePath + containerPath
    )
  }

  return symbolLink
}

export default function rehypeTypedoc(options) {
  const typedoc = options.typedoc || {}
  const basePath = options.basePath || '/'

  const symbolLinkIndex = buildSymbolLinkIndex(typedoc)

  return transformer

  function transformer(tree) {
    const foundLinks = []

    function replaceChildren(node) {
      const newChildren = []
      let lastMatchOffset = 0

      // gather matches of [[link|alias]] marked links
      for (const match of node.value.matchAll(TYPEDOC_SYMBOL_LINK_REGEXP)) {
        const [text, symbol] = match

        foundLinks.push(text)

        // capture left of match
        const lhs = node.value.substring(lastMatchOffset, match.index)

        // keep track of running match offset
        lastMatchOffset = match.index + text.length

        // does it have an alias display value? e.g. [[Symbol.method|display text]]
        const [symbolPath, ...alias] = symbol.split('|')
        const displayValue = alias.length ? alias.join('') : symbol
        const symbolLink = generateLinkFromSymbol(
          symbolPath,
          basePath,
          symbolLinkIndex
        )

        // append lhs + anchor tag
        newChildren.push(
          {
            type: 'text',
            value: lhs,
          },
          {
            type: 'element',
            tagName: 'a',
            properties: {
              className: 'symbol',
              'data-missing': symbolLink ? undefined : true,
              href: symbolLink,
            },
            children: [
              {
                type: 'text',
                value: displayValue,
              },
            ],
          }
        )
      }

      // if there are new children, we found at least one match
      // so append them plus any remaining non-matched text
      if (newChildren.length > 0) {
        if (lastMatchOffset < node.value.length) {
          newChildren.push({
            type: 'text',
            value: node.value.substring(lastMatchOffset),
          })
        }

        // replace the node value with
        // a new HTML span with new children
        // otherwise it can get hairy to replace children
        // as we are iterating over them
        delete node.value
        node.type = 'element'
        node.tagName = 'span'
        node.children = newChildren
      }
    }

    function transformLinks(node) {
      if (node.children && node.children.length > 0) {
        node.children.forEach(transformLinks)
      }

      if (node.type !== 'text') {
        return
      }

      replaceChildren(node)
    }

    transformLinks(tree)
  }
}
