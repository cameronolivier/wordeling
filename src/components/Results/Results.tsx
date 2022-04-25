import React from 'react'
import styles from './Results.module.scss'

interface Props {
  words: string[]
}

function Results({ words }: Props) {
  return (
    <>
      <h1>Results:</h1>
      <div className={styles.container}>
        {words.map((word: string) => (
          <div
            key={word}
            style={{
              border: '1px solid #ddd',
              margin: '5px',
              padding: '10px'
            }}
          >
            {word}
          </div>
        ))}
      </div>
    </>
  )
}

export default Results
