import { flatten } from 'ramda'
import React from 'react'
import styles from './App.module.scss'
import Results from './components/Results'
import RightPlaceSelect from './components/RightPlaceSelect'
import WordleCard from './components/WordleCard'
import { dictionary } from './constants'
import SelectRemovedKeyboard from './components/SelectRemovedKeyboard'
import { createWordsFromPatterns } from './utils'

const allowed = ['a']
const patterns = ['R*ISE']

const words = createWordsFromPatterns(flatten([dictionary]))(allowed, patterns)
function App() {
  return (
    <div className={styles.container}>
      <WordleCard />
      <hr />
      <h2>Select removed letters:</h2>
      <SelectRemovedKeyboard />
      <RightPlaceSelect />
      <Results words={words} />
    </div>
  )
}

export default App
