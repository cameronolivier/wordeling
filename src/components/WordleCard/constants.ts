import { Card, KeyState, Letters } from './types'

export const keyStateStylesMap = {
  [KeyState.Default]: {},
  [KeyState.Partial]: { color: '#000', background: '#ff0' },
  [KeyState.Correct]: { color: '#000', background: '#0f0' },
  [KeyState.Excluded]: { color: '#000', background: '#ccc' }
}

export const initialCard: Card = [
  [
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default }
  ],
  [
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default }
  ],
  [
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default }
  ],
  [
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default }
  ],
  [
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default }
  ],
  [
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default },
    { char: '', state: KeyState.Default }
  ]
]

export const initialLetters: Letters = {
  a: null,
  b: null,
  c: null,
  d: null,
  e: null,
  f: null,
  g: null,
  h: null,
  i: null,
  j: null,
  k: null,
  l: null,
  m: null,
  n: null,
  o: null,
  p: null,
  q: null,
  r: null,
  s: null,
  t: null,
  u: null,
  v: null,
  w: null,
  x: null,
  y: null,
  z: null
}
