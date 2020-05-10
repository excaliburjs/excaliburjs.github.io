import typedoc from './typedoc.json'
import rehypeTypedoc from '../rehype-typedoc'

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

    expect(mockHast.children[0]).toHaveLength(3)
    expect(mockHast.children[0].type).toBe('element')
    expect(mockHast.children[0].tagName).toBe('span')
  })
})
