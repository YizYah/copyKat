"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// for backward compatibility
const regExShared_1 = require("./regExShared");
exports.customCleanupRegExText = `${regExShared_1.commentOpen} ns__custom_(start|end) unit: ${regExShared_1.locationSpec}${regExShared_1.commentClose}`;
