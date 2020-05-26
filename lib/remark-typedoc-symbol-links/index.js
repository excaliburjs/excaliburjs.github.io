const modifyChildren = require('unist-util-modify-children')
const { buildSymbolLinkIndex, generateLinkFromSymbol } = require('./helpers')

module.exports = function remarkTypedocSymbolLinks(options = {}) {
  const typedoc = options.typedoc || {}
  const basePath = options.basePath || '/'

  const symbolLinkIndex = buildSymbolLinkIndex(typedoc)

  return transformer

  function transformer(tree) {
    const foundLinks = []

    const transformLinks = modifyChildren((node, index, parent) => {
      if (node.children && node.children.length) {
        transformLinks(node)
      }

      if (node.type !== 'linkReference') {
        return
      }

      const nodeIndex = parent.children.indexOf(node)
      const prevNode = parent.children[nodeIndex - 1]
      const nextNode = parent.children[nodeIndex + 1]

      // A symbol link is interpreted as a linkReference and will
      // have a left and right text node with `[` and `]` as the last
      // and first character value, respectively.
      if (
        prevNode &&
        prevNode.type === 'text' &&
        prevNode.value.endsWith('[') &&
        nextNode &&
        nextNode.type === 'text' &&
        nextNode.value.startsWith(']')
      ) {
        const symbol = node.label

        foundLinks.push(symbol)

        // does it have an alias display value? e.g. [[Symbol.method|display text]]
        const [symbolPath, ...alias] = symbol.split('|')
        const displayValue = alias.length ? alias.join('') : symbol
        const symbolLink = generateLinkFromSymbol(
          symbolPath,
          basePath,
          symbolLinkIndex
        )

        if (process.env.NODE_ENV === 'development' && !symbolLink) {
          console.warn(
            'remark-typedoc-symbol-links: Could not resolve symbol:',
            symbol
          )
        }

        // replace linkReference with link node
        const linkNode = {
          type: 'link',
          url: symbolLink || '',
          title: symbolLink
            ? `View '${symbolPath}' in API reference docs`
            : "Missing link to symbol in API docs, we're happy to accept a PR to fix this!",

          data: {
            hProperties: {
              className: 'symbol',
              'data-missing': symbolLink ? undefined : true,
              target: '_blank',
            },
          },
          children: [
            {
              type: 'text',
              value: displayValue,
            },
          ],
        }

        prevNode.value = prevNode.value.substring(0, prevNode.value.length - 1)
        parent.children.splice(index, 1, linkNode)
        nextNode.value = nextNode.value.substring(1)

        return index + 1
      }
    })

    transformLinks(tree)
  }
}
