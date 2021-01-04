"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// just for backward compatibility
const regExShared_1 = require("./regExShared");
const firstLineBody = (delimiters) => `${regExShared_1.openingForDelimiters(delimiters)}ns__custom_start${regExShared_1.space}unit:${regExShared_1.space}${regExShared_1.locationSpec}${regExShared_1.closingForDelimiters(delimiters)}`;
exports.customLocationRegExString = (delimiters) => `${firstLineBody(delimiters)}${regExShared_1.content}${regExShared_1.openingForDelimiters(delimiters)}ns__custom_end${regExShared_1.space}unit:${regExShared_1.space}${regExShared_1.locationRepetition}${regExShared_1.closingForDelimiters(delimiters)}`;
