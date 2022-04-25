import * as SUT from './utils'

describe('src/components/CustomKeyboard/utils', () => {
  describe('getKeyStyles', () => {
    it('should return an empty object if keys are empty', () => {
      // given ...
      // when ...
      const result = SUT.getKeyStyles('x', [])
      // then ...
      expect(result).toEqual({})
    })
    it('should return an empty object if key does not match', () => {
      // given ...
      const keys = [{ char: 'y', style: { color: '#333' } }]
      // when ...
      const result = SUT.getKeyStyles('x', keys)
      // then ...
      expect(result).toEqual({})
    })
    it('should return an empty object if there is a match but styles does not exist', () => {
      // given ...
      const keys = [{ char: 'y', style: { color: '#333' } }, { char: 'x' }]
      // when ...
      const result = SUT.getKeyStyles('x', keys)
      // then ...
      expect(result).toEqual({})
    })
    it('should return the styles object if there is a match', () => {
      // given ...
      const keys = [
        { char: 'y', style: { color: '#333' } },
        { char: 'x', style: { color: '#3f3' } }
      ]
      // when ...
      const result = SUT.getKeyStyles('x', keys)
      // then ...
      expect(result).toEqual({ color: '#3f3' })
    })
  })
})
