const {
  isArray, isPlainObject, camelCase, isObjectLike, transform, set, map,
} = require('lodash')

/*
  Deep convert snake_case object to camelCase
*/
const createIteratee = (converter, self) => (result, value, key) =>
  set(result, converter(key), isObjectLike(value) ? self(value) : value)

const objectToCamelCase = node => {
  if (isArray(node)) return map(node, objectToCamelCase)
  if (isPlainObject(node)) return transform(node, createIteratee(camelCase, objectToCamelCase))
  return node
}

export default {
  objectToCamelCase,
}
