"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regExShared_1 = require("./regExShared");
const __1 = require("..");
exports.regExFileText = (delimiters) => regExShared_1.openingForDelimiters(delimiters) + __1.markupTags.FILE_INFO +
    regExShared_1.space + 'unit:' + regExShared_1.specString + ',' +
    regExShared_1.space + 'comp:' + regExShared_1.specString +
    regExShared_1.closingForDelimiters(delimiters);
