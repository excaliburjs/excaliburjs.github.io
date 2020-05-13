import typedoc from './typedoc.json'
import rehypeTypedoc, {
  buildSymbolLinkIndex,
  generateLinkFromSymbol,
} from '../rehype-typedoc'

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

  describe('generateLinkFromSymbol', () => {
    let lookup

    beforeAll(() => {
      lookup = buildSymbolLinkIndex(typedoc)
    })

    test('should generate link for class symbol', () => {
      expect(generateLinkFromSymbol('Engine', '/', lookup)).toBe(
        '/classes/_engine_.engine.html'
      )
    })

    test('should generate link for class constructor symbol', () => {
      expect(generateLinkFromSymbol('Engine#ctor', '/', lookup)).toBe(
        '/classes/_engine_.engine.html#constructor'
      )
    })

    test('should generate link for class method symbol', () => {
      expect(generateLinkFromSymbol('Engine.start', '/', lookup)).toBe(
        '/classes/_engine_.engine.html#start'
      )
    })

    test('should generate link for class static method symbol', () => {
      expect(generateLinkFromSymbol('Engine.createMainLoop', '/', lookup)).toBe(
        '/classes/_engine_.engine.html#createmainloop'
      )
    })

    test('should generate link for class property symbol', () => {
      expect(generateLinkFromSymbol('Engine.rootScene', '/', lookup)).toBe(
        '/classes/_engine_.engine.html#rootscene'
      )
    })

    test('should generate link for class accessor symbol', () => {
      expect(generateLinkFromSymbol('Engine.canvasHeight', '/', lookup)).toBe(
        '/classes/_engine_.engine.html#canvasheight'
      )
    })

    test('should generate link for interface symbol', () => {
      expect(generateLinkFromSymbol('EngineOptions', '/', lookup)).toBe(
        '/interfaces/_engine_.engineoptions.html'
      )
    })

    test('should generate link for interface property symbol', () => {
      expect(
        generateLinkFromSymbol('EngineOptions.backgroundColor', '/', lookup)
      ).toBe('/interfaces/_engine_.engineoptions.html#backgroundcolor')
    })

    test('should generate link for module function symbol', () => {
      expect(generateLinkFromSymbol('clamp', '/', lookup)).toBe(
        '/modules/_util_util_.html#clamp'
      )
    })

    test('should generate link for module enum symbol', () => {
      expect(generateLinkFromSymbol('DisplayMode', '/', lookup)).toBe(
        '/enums/_engine_.displaymode.html'
      )
    })

    test('should generate link for module enum member symbol', () => {
      expect(generateLinkFromSymbol('DisplayMode.Container', '/', lookup)).toBe(
        '/enums/_engine_.displaymode.html#container'
      )
    })

    test('should generate link for type alias symbol', () => {
      expect(generateLinkFromSymbol('activate', '/', lookup)).toBe(
        '/modules/_events_.html#activate'
      )
    })

    test('should generate link for object literals symbol', () => {
      expect(generateLinkFromSymbol('REPORTED_FEATURES', '/', lookup)).toBe(
        '/modules/_util_detector_.html#reported_features'
      )
    })
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

      // Enums
      expect(lookup.has('DisplayMode')).toBe(true)
      expect(lookup.has('DisplayMode.Container')).toBe(true)

      // Object literals / const
      expect(lookup.has('REPORTED_FEATURES')).toBe(true)

      // Type aliases
      expect(lookup.has('activate')).toBe(true)
    })
  })
})
