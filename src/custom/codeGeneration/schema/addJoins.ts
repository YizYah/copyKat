const {JoinsData} = require('magicalstrings').constants.types.nsInfo
const {Schema} = require('magicalstrings').constants.types.schema

import {newJoin} from './newJoin'

export function addJoins(joins: JoinsData, schema: Schema) {
  if (joins) {
    Object.keys(joins).map(joinName => {
      const joinInfo = joins[joinName]
      // console.log(`in object joins... joinInfo=${joinInfo}`);

      schema = newJoin(
        schema, joinName, joinInfo
      )
    })
  }
  return schema
}
