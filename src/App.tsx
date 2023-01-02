import { flatten } from 'ramda'
import React from 'react'
import styles from './App.module.scss'
import Results from './components/Results'
import RightPlaceSelect from './components/RightPlaceSelect'
import WordleCard from './components/WordleCard'
import { dictionary } from './constants'
import SelectRemovedKeyboard from './components/SelectRemovedKeyboard'
import { createWordsFromPatterns } from './utils'

const today = []
const disallowed = [
  'B',
  'C',
  'D',
  'F',
  'G',
  'J',
  'K',
  'L',
  'M',
  'Q',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'O',
  'E'
]
const patterns = [
  'OEC**',
  '*ECO*',
  '*EC*O',
  'OE**C',
  '*E*OC',
  'OCE**',
  '*CEO*',
  '*CE*O',
  'O*E*C',
  '**EOC',
  'OC*E*',
  '*C*EO',
  'O*CE*',
  '**CEO',
  'O**EC'
]

const words = createWordsFromPatterns(flatten([today]))(disallowed, patterns)
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
