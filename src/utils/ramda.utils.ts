import { curry, find, propEq } from 'ramda'

export const findByProp = curry((prop: string, value: any, data: any[]) =>
  find(propEq(prop, value), data)
)

export const findByPropOr = curry(
  (fallback: any, prop: string, value: any, data: any[]) =>
    findByProp(prop, value, data) || fallback
)
