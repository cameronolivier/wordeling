import {
  flatten,
  map,
  pipe,
  replace,
  uniq,
  __,
  includes,
  filter,
  complement
} from 'ramda'
import { consonants } from './constants'

export const replacePlaceholderWithAllowedChar = (
  allowed: string[],
  word: string
): string[] => allowed.map((letter) => replace('*', letter, word)) as string[]

export const replaceAllPlaceholders = (
  allowed: string[],
  words: string | string[]
): string[] => {
  const w = flatten([words])
  const isComplete =
    w[0].split('').filter((x: string) => x === '*').length === 0

  if (isComplete) {
    return w
  }

  const partiallyReplacedWords = flatten(
    w.map((word) => replacePlaceholderWithAllowedChar(allowed, word))
  )

  return replaceAllPlaceholders(allowed, partiallyReplacedWords)
}

export const isFirstLetterConsonant = (word: string): boolean =>
  word.split('').filter((x) => x === 'A').length > 1

export const createWordsFromPatterns =
  (dictionary: string[]) => (allowed: string[], patterns: string[]) =>
    pipe(
      map((pattern: string) => replaceAllPlaceholders(allowed, pattern)),
      flatten,
      uniq,
      filter(complement(isFirstLetterConsonant))
      // filter(includes(__, dictionary))
    )(patterns)
