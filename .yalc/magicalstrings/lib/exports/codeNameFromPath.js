"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
exports.codeNameFromPath = (codeDir) => {
    if (codeDir === '.')
        return path.basename(path.resolve());
    return path.basename(codeDir); // codeDir.match(/([^\/]*)\/*$/)![1].substring(2)
};
