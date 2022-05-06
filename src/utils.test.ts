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
      ['AAARD', true],
      ['BAARD', true],
      ['ZAARD', true],
      ['DAARD', true],
      ['EAARD', true]
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
  describe('getLetterScores', () => {
    it('should take a list of words and sum up the instances of each letter, excluding', () => {
      const possibles = ['gauze', 'cache', 'gaffe', 'maybe', 'halve']

      const results = SUT.getLetterScores(['a', 'e'], possibles)
      expect(results).toEqual({
        a: 0,
        b: 1,
        c: 2,
        e: 0,
        f: 2,
        g: 2,
        h: 2,
        l: 1,
        m: 1,
        u: 1,
        v: 1,
        y: 1,
        z: 1
      })
    })
  })
  describe.only('sortDescendingTuple', () => {
    it.each([
      [['a', 5], ['b', 2], -3],
      [['a', 3], ['b', 3], 0],
      [['a', 2], ['b', 5], 3]
    ])(
      'should return the correct value for the sort function',
      (a, b, expected) => {
        const result = SUT.sortDescendingTuple(
          a as [string, number],
          b as [string, number]
        )
        expect(result).toBe(expected)
      }
    )
  })
  describe('getLetterScoresSorted', () => {
    it('should do what I want', () => {
      const possibles = ['gauze', 'cache', 'gaffe', 'maybe', 'halve']

      const results = SUT.getLetterScoresSorted(['a', 'e'], possibles)
      expect(results).toEqual([
        ['a', 0],
        ['e', 0],
        ['u', 1],
        ['z', 1],
        ['m', 1],
        ['y', 1],
        ['b', 1],
        ['l', 1],
        ['v', 1],
        ['g', 2],
        ['c', 2],
        ['h', 2],
        ['f', 2]
      ])
    })
  })
  describe('sumWord', () => {
    it('should return the word list with associated scores', () => {
      const possibles = ['gauze', 'cache', 'gaffe', 'maybe', 'halve']
      const scores = {
        a: 0,
        b: 1,
        c: 2,
        e: 0,
        f: 2,
        g: 2,
        h: 2,
        l: 1,
        m: 1,
        u: 1,
        v: 1,
        y: 1,
        z: 1
      }

      const result = SUT.sumWord(scores, possibles)
      expect(result).toEqual({
        cache: 6,
        gaffe: 6,
        gauze: 4,
        halve: 4,
        maybe: 3
      })
    })
  })
  describe('getWordScores', () => {
    it('should pair the given words with their letter scores', () => {
      const possibles = ['gauze', 'cache', 'gaffe', 'maybe', 'halve']
      const results = SUT.getWordScores(['a', 'e'], possibles)
      expect(results).toEqual({
        cache: 6,
        gaffe: 6,
        gauze: 4,
        halve: 4,
        maybe: 3
      })
    })
  })
  describe('getWordScoresSorted', () => {
    it('should do what I want', () => {
      const possibles = ['gauze', 'cache', 'gaffe', 'maybe', 'halve']
      const results = SUT.getWordScoresSorted(['a', 'e'], possibles)
      expect(results).toEqual([
        ['cache', 6],
        ['gaffe', 6],
        ['gauze', 4],
        ['halve', 4],
        ['maybe', 3]
      ])
    })
  })
})
