import { append, complement, filter, pipe, propEq } from 'ramda'
import { findByProp } from '../../utils/ramda.utils'
import { KeyStyles } from '../CustomKeyboard/types'
import { keyStateStylesMap } from './constants'
import { Card, CardIndex, CardItem, KeyState, KeysWithState } from './types'

export const getKeyStateStyles = (
  state: KeyState,
  stylesMap = keyStateStylesMap
): KeyStyles => {
  return stylesMap[state] || {}
}

export const updateLetterState = (state: KeyState) =>
  state === 3 ? 0 : state + 1

export const handleKeySelect =
  (char: string) => (selected: KeysWithState[]) => {
    const key = findByProp('char', char, selected)
    if (!key) {
      const newKey = {
        char,
        state: KeyState.Partial,
        style: getKeyStateStyles(KeyState.Partial)
      }
      return [...selected, newKey]
    }

    const state = updateLetterState(key.state)
    const updatedKey = {
      char,
      style: getKeyStateStyles(state),
      state
    }
    return pipe(
      filter(complement(propEq('char', char))),
      append(updatedKey)
    )(selected)
  }

export const updateCard =
  (index: CardIndex, value: CardItem) => (card: Card) => {
    if (index[0] > card.length || index[1] > card[0].length) {
      return card
    }

    return card.map((row, rowI) => {
      if (rowI === index[0]) {
        return row.map((item, itemI) => (itemI === index[1] ? value : item))
      }
      return row
    })
  }

export const increaseCardIndex = (index: CardIndex) => {
  const [row, item] = index

  if (item === 4) {
    if (row === 6) {
      return [0, 0]
    }
    return [row + 1, 0]
  }

  return [row, item + 1]
}

export const decreaseCardIndex = (index: CardIndex) => {
  const [row, item] = index

  if (item === 0) {
    if (row === 0) {
      return [0, 0]
    }
    return [row - 1, 4]
  }

  return [row, item - 1]
}
