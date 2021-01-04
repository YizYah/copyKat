"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentOpen = '(\\/\\/|\\/\\*)';
exports.commentClose = '(\\n|\\*\\/)';
exports.content = '((.|\n)*?)';
exports.space = '[ \\t]+';
exports.possibleSpace = '[ \\t]*';
// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
function escapeRegExp(s) {
    return s.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
function convertDelimitersForRegEx(commentDelimiter) {
    return escapeRegExp(commentDelimiter).replace('\\\\n', '\\n');
    // return commentDelimiter
}
exports.convertDelimitersForRegEx = convertDelimitersForRegEx;
exports.openingForDelimiters = (delimiters) => `${convertDelimitersForRegEx(delimiters.open)}${exports.possibleSpace}`;
exports.closingForDelimiters = (delimiters) => `${exports.possibleSpace}${convertDelimitersForRegEx(delimiters.close)}`;
exports.specString = exports.space + '(\\S*)';
// export const openingMarker = (tag: string) => opening + tag + specString + closing
// export const closingMarker = (tag: string) => opening + tag + space + '\\2' + closing
exports.openingMarkerForDelimiters = (tag, delimiters) => exports.openingForDelimiters(delimiters) + tag + exports.specString + exports.closingForDelimiters(delimiters);
exports.closingMarkerForDelimiters = (tag, delimiters) => exports.openingForDelimiters(delimiters) + tag + exports.space + '\\1' + exports.closingForDelimiters(delimiters);
// for backward compatibility
exports.locationSpec = '(\\S*), comp: (\\S*), loc: (\\S*)';
exports.locationRepetition = '\\2, comp: \\3, loc: \\4';
