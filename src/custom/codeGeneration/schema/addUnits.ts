const {Units} = require('magicalstrings').constants.types.nsInfo
const {Schema} = require('magicalstrings').constants.types.schema

import {newUnit} from  './newUnit'
const {Configuration} = require('magicalstrings').constants.types.configuration

export function addUnits(
  units: Units, schema: Schema, config: Configuration
) {
  if (units) {
    Object.keys(units).map(unitString => {
      const unitInfo = units[unitString]
      newUnit(
        schema, unitString, unitInfo, config
      )
    })
  }
  return schema
}
