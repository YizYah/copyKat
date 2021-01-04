"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regExShared_1 = require("./regExShared");
const __1 = require("..");
// const openCustom = openingMarker(markupTags.CUSTOM_START)
// const closeCustom = closingMarker(markupTags.CUSTOM_END)
const openCustomForDelimiters = (delimiters) => regExShared_1.openingMarkerForDelimiters(__1.markupTags.CUSTOM_START, delimiters);
const closeCustomForDelimiters = (delimiters) => regExShared_1.closingMarkerForDelimiters(__1.markupTags.CUSTOM_END, delimiters);
exports.customLocationNewRegExString = (delimiters) => openCustomForDelimiters(delimiters) + regExShared_1.content + closeCustomForDelimiters(delimiters);
