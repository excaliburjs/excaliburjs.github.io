const remarkTypedocSymbolLinks = require('../remark-typedoc-symbol-links')
const { DEFAULT_OPTIONS } = require('./constants')

module.exports = async ({ markdownAST, getNodesByType }, pluginOptions) => {
  const options = Object.assign({}, DEFAULT_OPTIONS, pluginOptions)
  const typedocNodes = getNodesByType('Typedoc')

  if (typedocNodes) {
    console.log('Found typedocNodes', typedocNodes.length)

    typedocNodes.forEach((node) => {
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
