import { Keys, KeyStyles } from '../CustomKeyboard/types'

export interface ItemStyles {
  color?: string
  background?: string
}

export enum KeyState {
  Default,
  Partial,
  Correct
}

export interface KeysWithState extends Keys {
  state?: KeyState
}

export interface CardItem {
  char: string
  state?: KeyState
  style?: ItemStyles
}
export type Card = CardItem[][]
export type CardIndex = number[]
