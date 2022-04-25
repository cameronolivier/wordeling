import { Card, KeyState } from './types'

export const keyStateStylesMap = {
  [KeyState.Default]: {},
  [KeyState.Partial]: { color: '#000', background: '#ff0' },
  [KeyState.Correct]: { color: '#000', background: '#0f0' }
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
  ]
]
