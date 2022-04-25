import React, { useCallback, useState } from 'react'
import CustomKeyboard from '../CustomKeyboard'
import { initialCard } from './constants'
import { Card, CardIndex, KeyState, KeysWithState } from './types'
import {
  getKeyStateStyles,
  handleKeySelect,
  updateCard,
  updateCardIndex,
  updateLetterState
} from './utils'
import styles from './WordleCard.module.scss'

interface Props {}

function WordleCard({}: Props) {
  const [selected, setSelected] = useState<KeysWithState[]>([])
  const [card, setCard] = useState<Card>(initialCard)
  const [cardIndex, setCardIndex] = useState<CardIndex>([0, 0])

  const handleSelect = useCallback(
    (char: string) => {
      setSelected(handleKeySelect(char))
      setCard(updateCard(cardIndex, { char, state: KeyState.Partial }))
      setCardIndex(updateCardIndex)
    },
    [cardIndex]
  )

  const handleSetKeyState = useCallback(
    (index: number[]) => {
      const key = card[index[0]][index[1]]
      const newState = updateLetterState(key.state || KeyState.Default)
      const newStyle = getKeyStateStyles(newState)
      setCard(
        updateCard(index, { char: key.char, state: newState, style: newStyle })
      )
    },
    [card]
  )

  // useEffect(() => {
  //   setCardIndex(updateCardIndex)
  // }, [card])

  // useEffect(() => {
  //   console.log({ card })
  // }, [card])

  // useEffect(() => {
  //   console.log({ cardIndex })
  // }, [cardIndex])

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
      <CustomKeyboard selected={selected} onSelect={handleSelect} />
    </div>
  )
}

export default WordleCard
