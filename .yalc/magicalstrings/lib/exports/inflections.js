"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pluralize = require('pluralize');
const inflection = require('inflection');
function allCaps(text) {
    if (text)
        return inflection.underscore(text).toUpperCase();
}
exports.allCaps = allCaps;
function singularName(name) {
    return inflection.camelize(name);
}
exports.singularName = singularName;
function pluralName(name) {
    return inflection.camelize(pluralize(name));
}
exports.pluralName = pluralName;
function pluralLowercaseName(name) {
    return pluralize(name);
}
exports.pluralLowercaseName = pluralLowercaseName;
function relationshipsForSource(source) {
    return `${allCaps(source)}_RELATIONSHIPS`;
}
exports.relationshipsForSource = relationshipsForSource;
function queryForSource(source) {
    return `SOURCE_${allCaps(source)}_QUERY`;
}
exports.queryForSource = queryForSource;
