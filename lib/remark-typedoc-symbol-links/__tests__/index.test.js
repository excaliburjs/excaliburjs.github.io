import typedoc from './typedoc.json'
import { buildSymbolLinkIndex, generateLinkFromSymbol } from '../helpers'
import remarkTransform from '../'

describe('remark-typedoc-symbol-links', () => {
  test('should replace simple symbol text node with text and link nodes to symbol', () => {
    const mockMdast = {
      type: 'root',
      children: [
        {
          type: 'text',
          value: 'A link to [[Engine]] docs',
        },
      ],
    }
    const transform = remarkTransform({ typedoc })

    transform(mockMdast)

    expect(mockMdast.children).toHaveLength(3)

    const [lhs, link, rhs] = mockMdast.children

    expect(lhs.value).toBe('A link to ')
    expect(rhs.value).toBe(' docs')

    expect(link.type).toBe('link')
    expect(link.url).toBe('/classes/_engine_.engine.html')
    expect(link.data.hProperties.className).toBe('symbol')
    expect(link.children).toHaveLength(1)
    const [linkText] = link.children
    expect(linkText.type).toBe('text')
    expect(linkText.value).toBe('Engine')
  })

  test('should replace aliased symbol text node', () => {
    const mockMdast = {
      type: 'root',
      children: [
        {
          type: 'text',
          value: 'A link to [[Engine|the engine]] docs',
        },
      ],
    }
    const transform = remarkTransform({ typedoc })

    transform(mockMdast)

    expect(mockMdast.children).toHaveLength(3)

    const [lhs, link, rhs] = mockMdast.children

    expect(lhs.value).toBe('A link to ')
    expect(rhs.value).toBe(' docs')

    expect(link.type).toBe('link')
    expect(link.url).toBe('/classes/_engine_.engine.html')
    expect(link.children).toHaveLength(1)
    const [linkText] = link.children
    expect(linkText.type).toBe('text')
    expect(linkText.value).toBe('the engine')
  })

  test('should annotate broken symbol with missing data attribute', () => {
    const mockMdast = {
      type: 'root',
      children: [
        {
          type: 'text',
          value: 'A link to [[abcdefg]] docs',
        },
      ],
    }
    const transform = remarkTransform({ typedoc })

    transform(mockMdast)

    expect(mockMdast.children).toHaveLength(3)

    const [lhs, link, rhs] = mockMdast.children

    expect(lhs.value).toBe('A link to ')
    expect(rhs.value).toBe(' docs')

    expect(link.type).toBe('link')
    expect(link.url).toBeUndefined()
    expect(link.data.hProperties['data-missing']).toBe(true)
    expect(link.children).toHaveLength(1)
    const [linkText] = link.children
    expect(linkText.type).toBe('text')
    expect(linkText.value).toBe('abcdefg')
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
