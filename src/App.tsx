import { flatten } from 'ramda'
import React from 'react'
import styles from './App.module.scss'
import Results from './components/Results'
import RightPlaceSelect from './components/RightPlaceSelect'
import WordleCard from './components/WordleCard'
import { dictionary } from './constants'
import SelectRemovedKeyboard from './components/SelectRemovedKeyboard'
import { createWordsFromPatterns } from './utils'

const allowed = ['Q', 'W', 'D', 'F', 'G', 'J', 'K', 'L', 'Z', 'X', 'V', 'M']
const patterns = [
  'SEYT*',
  'SE*TY',
  'ESYT*',
  'ES*TY',
  'ETSY*',
  'ETS*Y',
  'E*STY',
  'YEST*',
  '*ESTY'
]

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
