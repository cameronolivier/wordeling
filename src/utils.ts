import {
  flatten,
  map,
  pipe,
  replace,
  uniq,
  __,
  includes,
  filter,
  complement,
  has,
  prop,
  inc,
  always,
  toPairs,
  sort,
  forEach,
  split,
  cond,
  T,
  fromPairs,
  sum,
  append,
  curry
} from 'ramda'

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
  word.split('').filter((char) => char === 'A').length > 1

export const createWordsFromPatterns =
  (dictionary: string[]) => (allowed: string[], patterns: string[]) =>
    pipe(
      map((pattern: string) => replaceAllPlaceholders(allowed, pattern)),
      flatten,
      uniq,
      filter(complement(isFirstLetterConsonant)),
      filter(includes(__, dictionary))
    )(patterns)

export const getLetterScores = (exclude: string[], words: string[]) => {
  const letters: Record<string, number> = {}
  forEach(
    pipe(
      split(''),
      forEach((letter: string) => {
        letters[letter] = cond([
          [always(includes(letter, exclude)), always(0)],
          [has(letter), pipe(prop(letter), inc)],
          [T, always(1)]
        ])(letters)
      })
    )
  )(words)
  return letters
}

export const sortDescendingTuple = (a: [string, number], b: [string, number]) =>
  b[1] - a[1]

export const getLetterScoresSorted = (exclude: string[], words: string[]) =>
  pipe(getLetterScores, toPairs, sort(sortDescendingTuple))(exclude, words)

export const sumWord = curry(
  (letterScores: Record<string, number>, words: string[]) =>
    pipe(
      map((word: string) =>
        pipe(
          split(''),
          map(prop(__, letterScores)),
          sum,
          append(__, [word])
        )(word)
      ),
      fromPairs
    )(words)
)

export const getWordScores = (exclude: string[], words: string[]) =>
  pipe(getLetterScores, sumWord(__, words))(exclude, words)

export const getWordScoresSorted = (exclude: string[], words: string[]) =>
  pipe(getWordScores, toPairs, sort(sortDescendingTuple))(exclude, words)
