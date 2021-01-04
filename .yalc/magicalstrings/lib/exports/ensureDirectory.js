"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dirOptions_1 = require("./dirOptions");
const fs = require('fs-extra');
async function ensureDirectory(dirPath) {
    fs.ensureDir(dirPath, dirOptions_1.dirOptions);
}
exports.ensureDirectory = ensureDirectory;
