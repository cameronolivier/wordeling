import { KeyState } from './types'
import * as SUT from './utils'

describe('src/components/WordleCard/utils', () => {
  describe('getKeyStateStyles', () => {
    it.each([[undefined], [5]])(
      'should fall back to empty object as default',
      (state) => {
        const map = {
          [KeyState.Default]: 'default',
          [KeyState.Partial]: 'partial',
          [KeyState.Correct]: 'correct'
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - testing edge cases
        const result = SUT.getKeyStateStyles(state, map)
        expect(result).toEqual({})
      }
    )
    it.each([
      [KeyState.Default, 'default'],
      [KeyState.Partial, 'partial'],
      [KeyState.Correct, 'correct']
    ])(
      'should return the correct styles for the current state',
      (state: KeyState, expected: string) => {
        // given ...
        const map = {
          [KeyState.Default]: 'default',
          [KeyState.Partial]: 'partial',
          [KeyState.Correct]: 'correct'
        }
        // when ...
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - testing edge cases
        const result = SUT.getKeyStateStyles(state, map)
        // then ...
        expect(result).toBe(expected)
      }
    )
  })
  describe('updateCard', () => {
    it.each([[[10, 0]], [[0, 10]]])(
      'should return the card if the index sits outside the matrix values',
      (index) => {
        // given ... a card matrix
        const card = [
          ['', ''],
          ['', '']
        ]
        // @ts-ignore Ignore for tests
        const result = SUT.updateCard(index, 'x')(card)
        expect(result).toEqual([
          ['', ''],
          ['', '']
        ])
      }
    )
    it('should insert the given value into the correct position in the card', () => {
      // given ... a card matrix
      const card = [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
      ]

      // when ...
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore -- no need to properly type the card for the test
      const result = SUT.updateCard([2, 2], 'x')(card)

      // then ...
      expect(result).toEqual([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', { char: 'x', state: 1 }, '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
      ])
    })
  })
  describe('increaseCardIndex', () => {
    it.each([
      [
        [0, 0],
        [0, 1]
      ],
      [
        [0, 4],
        [1, 0]
      ],
      [
        [6, 4],
        [0, 0]
      ]
    ])('should correctly increase the card index', (index, expected) => {
      const result = SUT.increaseCardIndex(index)
      expect(result).toEqual(expected)
    })
  })
  describe('decreaseCardIndex', () => {
    it.each([
      [
        [0, 1],
        [0, 0]
      ],
      [
        [1, 0],
        [0, 4]
      ],
      [
        [0, 4],
        [0, 3]
      ],
      [
        [0, 0],
        [0, 0]
      ]
    ])('should correctly decrease the card index', (index, expected) => {
      const result = SUT.decreaseCardIndex(index)
      expect(result).toEqual(expected)
    })
  })
})
