import React, { useCallback, useEffect, useState } from 'react'
import { mergeDeepLeft, omit } from 'ramda'
import styles from './RightPlaceSelect.module.scss'

interface Props {}

interface Correct {
  col1: string
  col2: string
  col3: string
  col4: string
  col5: string
}
function RightPlaceSelect({}: Props) {
  const [correct, setCorrect] = useState({})
  const handleInput = useCallback((e) => {
    if (e.target.value === '') {
      setCorrect(omit([e.target.name]))
    } else {
      setCorrect(mergeDeepLeft({ [e.target.name]: e.target.value }))
    }
  }, [])

  // useEffect(() => {
  //   console.log(correct)
  // }, [correct])

  return (
    <div className={styles.container}>
      <h1>Characters in correct place:</h1>
      <div className={styles.row}>
        <input
          name="col1"
          className={styles.input}
          placeholder=" "
          onInput={handleInput}
        />
        <input
          name="col2"
          className={styles.input}
          placeholder=" "
          onInput={handleInput}
        />
        <input
          name="col3"
          className={styles.input}
          placeholder=" "
          onInput={handleInput}
        />
        <input
          name="col4"
          className={styles.input}
          placeholder=" "
          onInput={handleInput}
        />
        <input
          name="col5"
          className={styles.input}
          placeholder=" "
          onInput={handleInput}
        />
      </div>
    </div>
  )
}

export default RightPlaceSelect
