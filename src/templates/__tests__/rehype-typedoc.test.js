import typedoc from './typedoc.json'
import rehypeTypedoc, { buildSymbolLinkIndex } from '../rehype-typedoc'

describe('rehypeTypedoc', () => {
  let mockHast

  beforeEach(() => {
    mockHast = {
      type: 'root',
      children: [
        {
          type: 'text',
          value: 'A link to [[Engine]] docs',
        },
      ],
    }
  })

  test('should split text node into span with link to symbol', () => {
    const transform = rehypeTypedoc({ typedoc })

    transform(mockHast)

    expect(mockHast.children).toHaveLength(1)

    const span = mockHast.children[0]

    expect(span.children).toHaveLength(3)
    expect(span.type).toBe('element')
    expect(span.tagName).toBe('span')

    const [lhs, link, rhs] = span.children

    expect(lhs.value).toBe('A link to ')
    expect(rhs.value).toBe(' docs')

    expect(link.tagName).toBe('a')
    expect(link.properties).toBeDefined()
    expect(link.properties.href).toBe('/classes/_engine_.engine.html')
  })

  describe('buildSymbolLinkIndex', () => {
    test('should build index of fully-qualified symbol path expressions', () => {
      const lookup = buildSymbolLinkIndex(typedoc)

      // Classes, ctors, methods, accessors
      expect(lookup.has('Engine#ctor')).toBe(true)
      expect(lookup.has('Engine.start')).toBe(true)
      expect(lookup.has('Engine.halfCanvasHeight')).toBe(true)

      // Interfaces
      expect(lookup.has('EngineOptions')).toBe(true)

      // Exported functions
      expect(lookup.has('clamp')).toBe(true)
      expect(lookup.has('canPlayFile')).toBe(true)
    })
  })
})
