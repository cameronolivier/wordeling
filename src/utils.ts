import { flatten, map, pipe, replace, uniq, __, includes, filter } from 'ramda'

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

export const createWordsFromPatterns =
  (dictionary: string[]) => (allowed: string[], patterns: string[]) =>
    pipe(
      map((pattern: string) => replaceAllPlaceholders(allowed, pattern)),
      flatten,
      uniq,
      filter(includes(__, dictionary))
    )(patterns)
