import React, { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'
import { keyboardLayout } from './constants'
import styles from './SelectRemovedKeyboard.module.scss'

interface Props {}
function SelectRemovedKeyboard({}: Props) {
  const [excluded, setExcluded] = useState<string[]>([])
  const handleClick = useCallback(
    (letter) => {
      if (excluded.includes(letter)) {
        setExcluded((excl) => excl.filter((char) => char !== letter))
      } else {
        setExcluded((excl) => [...excl, letter])
      }
    },
    [excluded]
  )

  // useEffect(() => {
  //   console.log(excluded)
  // }, [excluded])
  return (
    <div className={styles.container}>
      {keyboardLayout.map((row) => (
        <div key={`${row[0]}${row[1]}`} className={styles.keyboardRow}>
          {row.map((letter) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              key={letter}
              onClick={() => handleClick(letter)}
              className={classNames(
                styles.key,
                excluded.includes(letter) && styles.selected
              )}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default SelectRemovedKeyboard
