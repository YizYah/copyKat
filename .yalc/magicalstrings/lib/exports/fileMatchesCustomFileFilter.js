"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minimatch = require('minimatch');
function fileMatchesCustomFileFilter(fileName, config) {
    const filter = config.format.customFileFilter;
    return minimatch(fileName, filter, { dot: true, matchBase: true });
}
exports.fileMatchesCustomFileFilter = fileMatchesCustomFileFilter;
