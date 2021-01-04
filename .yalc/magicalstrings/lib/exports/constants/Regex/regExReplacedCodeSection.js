"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regExShared_1 = require("./regExShared");
const __1 = require("..");
// for saving replaced code
// const openReplacement = openingMarker(markupTags.REPLACEMENT_START) // `${opening}${markupTags.REPLACEMENT_START}${specString}${closing}`
// const closeReplacement = closingMarker(markupTags.REPLACEMENT_END)
const openReplacementForDelimiters = (delimiters) => regExShared_1.openingMarkerForDelimiters(__1.markupTags.REPLACEMENT_START, delimiters);
const closeReplacementForDelimiters = (delimiters) => regExShared_1.closingMarkerForDelimiters(__1.markupTags.REPLACEMENT_END, delimiters);
exports.replacedRexExText = (delimiters) => openReplacementForDelimiters(delimiters) + regExShared_1.content + closeReplacementForDelimiters(delimiters);
// export const replacedRexExText = `${firstLineBody}${content}${opening}${markupTags.REPLACEMENT_END}${space}\\2${closing}`
exports.regExReplacedCodeSection = (delimiters) => new RegExp(exports.replacedRexExText(delimiters), 'g');
// for inserting replaced code.  It's a two-step process.
// See a note of explanation at the point of usage.
const replacedGeneratedRegExText = (delimiters) => regExShared_1.openingMarkerForDelimiters(__1.markupTags.SECTION_START, delimiters); // `${opening}ns__start_section${specString}${closing}`
exports.regExReplacedCodeSectionGenerated = (delimiters) => new RegExp(replacedGeneratedRegExText(delimiters), 'g');
const taggedOpen = (delimiters) => regExShared_1.openingMarkerForDelimiters(__1.markupTags.REPLACEMENT_START, delimiters); // `${opening}//ns__start_replacement${specString}${closing}`
const taggedClose = (delimiters) => regExShared_1.closingMarkerForDelimiters(__1.markupTags.SECTION_END, delimiters);
const replacedTaggedRegExText = (delimiters) => taggedOpen(delimiters) + regExShared_1.content + taggedClose(delimiters);
// const replacedTaggedRegExText = `${taggedOpen}${content}${opening}ns__end_section${space}\\2${closing}`
exports.regExReplacedCodeSectionTagged = (delimiters) => new RegExp(replacedTaggedRegExText(delimiters), 'g');
