const modifyChildren = require('unist-util-modify-children')
const { buildSymbolLinkIndex, generateLinkFromSymbol } = require('./helpers')
const { TYPEDOC_SYMBOL_LINK_REGEXP } = require('./constants')

module.exports = function remarkTypedocSymbolLinks(options = {}) {
  const typedoc = options.typedoc || {}
  const basePath = options.basePath || '/'

  const symbolLinkIndex = buildSymbolLinkIndex(typedoc)

  return transformer

  function transformer(tree) {
    const foundLinks = []

    const transformLinks = modifyChildren((node, index, parent) => {
      if (node.type !== 'text') {
        return
      }

      const newChildren = []
      let lastMatchOffset = 0

      // gather matches of [[link|alias]] marked links
      for (const match of node.value.matchAll(TYPEDOC_SYMBOL_LINK_REGEXP)) {
        const [text, symbol] = match

        foundLinks.push(text)

        // does it have an alias display value? e.g. [[Symbol.method|display text]]
        const [symbolPath, ...alias] = symbol.split('|')
        const displayValue = alias.length ? alias.join('') : symbol
        const symbolLink = generateLinkFromSymbol(
          symbolPath,
          basePath,
          symbolLinkIndex
        )

        if (process.env.NODE_ENV === 'development' && !symbolLink) {
          console.warn('rehype-typedoc: Missing symbol link detected:', symbol)
        }

        // capture left of match
        const lhs = node.value.substring(lastMatchOffset, match.index)

        // keep track of running match offset
        lastMatchOffset = match.index + text.length

        // append lhs + anchor tag
        newChildren.push(
          {
            type: 'text',
            value: lhs,
          },
          {
            type: 'link',
            url: symbolLink,
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

        parent.children = newChildren

        return index + 1
      }
    })

    transformLinks(tree)
  }
}
