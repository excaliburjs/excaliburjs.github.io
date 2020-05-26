const {
  ReflectionKind,
} = require('typedoc/dist/lib/models/reflections/abstract')
const { SYMBOL_LINK_KINDS, SYMBOL_CONTAINERS } = require('./constants')

/**
 * Builds a lookup of symbol expressions to links for fast lookups
 * @param {AST} typedoc
 */
function buildSymbolLinkIndex(node, parents = [], lookup = new Map()) {
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

function generateLinkFromSymbol(symbolPath, basePath, symbolLinkIndex) {
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

module.exports = {
  buildSymbolLinkIndex,
  generateLinkFromSymbol,
}
