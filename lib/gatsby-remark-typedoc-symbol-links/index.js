const remarkTypedocSymbolLinks = require('remark-typedoc-symbol-links')
const { DEFAULT_OPTIONS } = require('./constants')

module.exports = async ({ markdownAST, getNodesByType }, pluginOptions) => {
  const options = Object.assign({}, DEFAULT_OPTIONS, pluginOptions)
  const typedocNodes = getNodesByType('Typedoc')

  if (typedocNodes && typedocNodes.length) {
    typedocNodes.forEach((node) => {
      if (node.internal.id !== options.id) {
        return
      }
      const transform = remarkTypedocSymbolLinks(
        Object.assign({}, options, {
          typedoc: JSON.parse(node.internal.content),
        })
      )

      transform(markdownAST)
    })
  }

  return markdownAST
}
