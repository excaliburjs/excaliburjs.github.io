const remarkTypedocSymbolLinks = require('remark-typedoc-symbol-links')
const { DEFAULT_OPTIONS } = require('./constants')

module.exports = async (
  { markdownAST, getNodes /*, getNodesByType */ },
  pluginOptions
) => {
  const options = Object.assign({}, DEFAULT_OPTIONS, pluginOptions)
  const typedocNodes = getNodes().filter(
    (n) => n.internal && n.internal.type === 'Typedoc'
  )

  if (typedocNodes && typedocNodes.length) {
    typedocNodes.forEach((node) => {
      if (node.typedocId !== options.id) {
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
