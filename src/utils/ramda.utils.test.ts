import * as SUT from './ramda.utils'

describe('src/utils/randa', () => {
  describe('findByProp', () => {
    it('should return undefined if data is empty', () => {
      // given ...
      // when ...
      const result = SUT.findByProp('char', 'x', [])
      // then ...
      expect(result).toBe(undefined)
    })
    it('should return undefined if key does not match', () => {
      // given ...
      const data = [{ char: 'y', styles: { color: '#333' } }]
      // when ...
      const result = SUT.findByProp('char', 'x', data)
      // then ...
      expect(result).toBe(undefined)
    })
    it('should return the selected object if there is a match', () => {
      // given ...
      const data = [
        { char: 'y', styles: { color: '#333' } },
        { char: 'x', styles: { color: '#3f3' } }
      ]
      // when ...
      const result = SUT.findByProp('char', 'x', data)
      // then ...
      expect(result).toEqual({ char: 'x', styles: { color: '#3f3' } })
    })
  })
  describe('findByPropOr', () => {
    it('should return the fallback if data is empty', () => {
      // given ...
      // when ...
      const result = SUT.findByPropOr('fallback', 'char', 'x', [])
      // then ...
      expect(result).toBe('fallback')
    })
    it('should return the fallback if key does not match', () => {
      // given ...
      const data = [{ char: 'y', styles: { color: '#333' } }]
      // when ...
      const result = SUT.findByPropOr('fallback', 'char', 'x', data)
      // then ...
      expect(result).toBe('fallback')
    })
    it('should return the selected object if there is a match', () => {
      // given ...
      const data = [
        { char: 'y', styles: { color: '#333' } },
        { char: 'x', styles: { color: '#3f3' } }
      ]
      // when ...
      const result = SUT.findByPropOr('fallback', 'char', 'x', data)
      // then ...
      expect(result).toEqual({ char: 'x', styles: { color: '#3f3' } })
    })
  })
})
