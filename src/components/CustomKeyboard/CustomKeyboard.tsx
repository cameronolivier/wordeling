import React, { useCallback } from 'react'
import { keyboardLayout } from './constants'
import styles from './CustomKeyboard.module.scss'
import { Keys } from './types'
import { getKeyStyles } from './utils'

interface Props {
  selected: Keys[]
  onKeyPress: (key: string) => void
}
function CustomKeyboard({ selected, onKeyPress }: Props) {
  const handleKeyPress = useCallback(
    (letter) => {
      //   console.log({ styles: getKeyStyles(letter, selected) })
      onKeyPress(letter)
    },
    [onKeyPress]
  )

  // useEffect(() => {
  //   console.log({ selected })
  // }, [selected])

  return (
    <div className={styles.container}>
      {keyboardLayout.map((row) => (
        <div key={`${row[0]}${row[1]}`} className={styles.keyboardRow}>
          {row.map((letter) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              key={letter}
              onClick={() => handleKeyPress(letter)}
              className={styles.key}
              style={getKeyStyles(letter, selected)}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default CustomKeyboard
