"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// for backward compatibility
const regExShared_1 = require("./regExShared");
exports.regExCleanupText = (delimiters) => `${regExShared_1.openingForDelimiters(delimiters)}ns__(start|end)_(section|replacement) unit: ${regExShared_1.locationSpec}${regExShared_1.closingForDelimiters(delimiters)}`;
