const TYPEDOC_SYMBOL_LINK_REGEXP = /\[\[([^\]]+)\]\]/gi

const SYMBOL_LINK_KINDS = [
  4 /* Enumeration */,
  128 /* Class */,
  256 /* Interface */,
  512 /* Constructor */,
  1024 /* Property */,
  2048 /* Method */,
  262144 /* Accessor */,
]

/**
 * Finds a symbol like "Engine.method" within Typedoc AST
 * @param {*} symbolPath Symbol name or path (dot syntax)
 * @param {*} node The node to search
 * @returns {boolean} Whether or not matches were found
 */
function findSymbolByParts(symbolParts, node, path = [], matches = []) {
  if (symbolParts.length === matches.length) {
    return true
  }

  if (node.children && node.children.length) {
    node.children.forEach(n => {
      const found = findSymbolByParts(symbolParts, n, path, matches)

      if (!found) {
        path.pop()
      } else if (found === true) {
        path.push([node.name, node.kind])
      }
    })
  }

  if (node.kind > 0) {
    path.push([node.name, node.kind])
  }

  if (!SYMBOL_LINK_KINDS.includes(node.kind)) {
    return undefined
  }

  const searchPart = symbolParts[matches.length]

  if (node.name === searchPart) {
    matches.push([node.name, node.kind])
    return true
  } else {
    return false
  }
}

export default function rehypeTypedoc(options) {
  const typedoc = options.typedoc || {}
  const basePath = options.basePath || '/'

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

        const symbolMatches = []
        let symbolLink = undefined

        findSymbolByParts(symbolPath.split('.'), typedoc, symbolMatches)

        if (symbolMatches && symbolMatches.length) {
          console.log('found match', symbolMatches)

          // assemble file url
          symbolLink = symbolMatches.reduceRight(
            (path, [matchSymbolName, matchSymbolKind]) => {
              switch (matchSymbolKind) {
                case 0 /* lib */:
                  break
                case 1 /* module */:
                  path +=
                    'classes/' + matchSymbolName.replace(/[^a-z0-9]/gi, '_')
                  break
                case 128 /* class */:
                  path += '.' + matchSymbolName + '.html'
                  break
                default:
                  path += '#' + matchSymbolName
                  break
              }
              return path.toLowerCase()
            },
            basePath
          )
        }

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

    console.log('typedoc', typedoc)
    console.log('transformed links', foundLinks)
  }
}
