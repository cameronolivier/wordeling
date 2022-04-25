import * as SUT from './utils'

describe('utils', () => {
  describe('replacePlaceholderWithAllowedChar', () => {
    it('should insert the character at * in the given word for every allowed char', () => {
      const allowed = ['A', 'B', 'C']
      const result = SUT.replacePlaceholderWithAllowedChar(allowed, 'W*RD')
      expect(result).toEqual(['WARD', 'WBRD', 'WCRD'])
    })
    it('should only replace the first placeholder', () => {
      const allowed = ['A', 'B', 'C']
      const result = SUT.replacePlaceholderWithAllowedChar(allowed, 'W*R*D')
      expect(result).toEqual(['WAR*D', 'WBR*D', 'WCR*D'])
    })
  })
  describe('replaceAllPlaceholders', () => {
    it('should replace all placeholders in a word (*)', () => {
      const allowed = ['A', 'B']
      const result = SUT.replaceAllPlaceholders(allowed, 'W*R*D*')
      expect(result).toEqual([
        'WARADA',
        'WARADB',
        'WARBDA',
        'WARBDB',
        'WBRADA',
        'WBRADB',
        'WBRBDA',
        'WBRBDB'
      ])
    })
  })
  describe('isFirstLetterConsonant', () => {
    it.each([
      ['AAARD', false],
      ['BAARD', true],
      ['ZAARD', true],
      ['DAARD', true],
      ['EAARD', false]
    ])('returns true if first letter is a consonant', (word, expected) => {
      const result = SUT.isFirstLetterConsonant(word)
      expect(result).toBe(expected)
    })
  })
  describe('createWordsFromPatterns', () => {
    it('should generate words from given patterns and allowed letters', () => {
      const allowed = ['A', 'R']
      const patterns = ['*RISE', 'R*ISE']
      const dictionary = ['RAISE', 'ARISE']
      const result = SUT.createWordsFromPatterns(dictionary)(allowed, patterns)
      expect(result).toEqual(['ARISE', 'RAISE'])
    })
  })
})
