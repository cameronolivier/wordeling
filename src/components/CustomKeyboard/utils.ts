import { pipe, propOr } from 'ramda'
import { findByPropOr } from '../../utils/ramda.utils'
import { Keys } from './types'

export const getKeyStyles = (char: string, keys: Keys[]) =>
  pipe(findByPropOr({}, 'char', char), propOr({}, 'style'))(keys)
