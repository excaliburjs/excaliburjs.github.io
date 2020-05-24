const { buildSymbolLinkIndex, generateLinkFromSymbol } = require('./helpers')
const { TYPEDOC_SYMBOL_LINK_REGEXP } = require('./constants')

module.exports = function remarkTypedocSymbolLinks(options) {
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

        if (process.env.NODE_ENV === 'development' && !symbolLink) {
          console.warn('rehype-typedoc: Missing symbol link detected:', symbol)
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
              title: symbolLink
                ? `View '${symbolPath}' in API reference docs`
                : "Missing link to symbol in API docs, we're happy to accept a PR to fix this!",
              href: symbolLink,
              target: '_blank',
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
