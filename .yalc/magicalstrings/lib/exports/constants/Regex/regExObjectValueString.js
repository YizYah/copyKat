"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const objectName = '[a-zA-Z]+';
const key = '(.|\\.)*';
exports.regExObjectValueString = __1.META_DELIMITER + `(${objectName})\\.(${key})` + __1.META_DELIMITER;
