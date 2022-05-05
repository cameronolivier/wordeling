import React, { useCallback, useEffect, useState } from 'react'
import CustomKeyboard from '../CustomKeyboard'
import { initialCard, initialLetters } from './constants'
import { Card, CardIndex, KeyState, Letters } from './types'
import {
  decreaseCardIndex,
  getKeyStateStyles,
  increaseCardIndex,
  updateCard,
  updateLetterState
} from './utils'
import styles from './WordleCard.module.scss'

function WordleCard() {
  const [card, setCard] = useState<Card>(initialCard)
  const [letters, setLetters] = useState<Letters>(initialLetters)
  const [cardIndex, setCardIndex] = useState<CardIndex>([0, 0])

  const handleKeyPress = useCallback(
    (char: string) => {
      if (char === '⇐') {
        const tempIndex = decreaseCardIndex(cardIndex)
        setCard(updateCard(tempIndex, { char: '', state: KeyState.Default }))
        setCardIndex(decreaseCardIndex)
      } else {
        setCard(updateCard(cardIndex, { char, state: KeyState.Default }))
        setCardIndex(increaseCardIndex)
      }
    },
    [cardIndex]
  )

  const getLetterValue = (
    state: KeyState,
    currValue: Letters,
    index: number
  ) => {
    console.log({ action: 'entry', currValue })
    if (state === KeyState.Excluded) {
      console.log({ action: 'is default', currValue })

      return -1
    }
    if (state === KeyState.Correct) {
      console.log({ action: 'is correct', currValue })

      return index
    }

    if (state === KeyState.Default) {
      console.log({ action: 'is correct', currValue })

      return null
    }

    if (Array.isArray(currValue)) {
      console.log({ action: 'is array', currValue })
      return [...currValue, index]
    }

    console.log({ action: 'is just partial', currValue })
    return [index]
  }

  const handleSetKeyState = useCallback(
    (index: number[]) => {
      const key = card[index[0]][index[1]]
      if (key.char === '') {
        return
      }
      const newState = updateLetterState(key.state || KeyState.Default)
      const newStyle = getKeyStateStyles(newState)
      setCard(
        updateCard(index, { char: key.char, state: newState, style: newStyle })
      )

      const letter = key.char.toLowerCase()

      const letterValue = getLetterValue(newState, letters[letter], index[1])
      const newLetters = { ...letters, [letter]: letterValue }
      setLetters(newLetters)
    },
    [card, letters]
  )

  useEffect(() => {
    console.log({ letters })
  }, [letters])

  return (
    <div className={styles.container}>
      <h1>Recreate your Wordle card</h1>
      <h2>Steps:</h2>
      <ol>
        <li>Enter all your word guesses.</li>
        <li>Set up your correct and partially correct letters:</li>
        <ol>
          <li>
            🟨 Set a block to correct letter, incorrect place by clicking once.
          </li>
          <li>
            🟩 Set a block to correct letter by clicking on the block twice
          </li>
          <li>
            ⬛️ Reset a block back to incorrect letter by clicking the third
            time.
          </li>
        </ol>
      </ol>

      <div className={styles.card}>
        {card.map((row, rowIndex) => (
          <div key={`${rowIndex}`} className={styles.row}>
            {row.map((item, itemIndex) => (
              <div
                key={`${item.char}${itemIndex}`}
                onClick={() => handleSetKeyState([rowIndex, itemIndex])}
                className={styles.item}
                style={item.style || {}}
              >
                {item.char}
              </div>
            ))}
          </div>
        ))}
      </div>
      <CustomKeyboard selected={[]} onKeyPress={handleKeyPress} />
    </div>
  )
}

export default WordleCard
