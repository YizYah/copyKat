"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolve_dir_fixed_1 = require("resolve-dir-fixed");
function resolveDir(rawCodeDir) {
    // const expanded = expandTilde(rawCodeDir)
    return resolve_dir_fixed_1.default(rawCodeDir);
}
exports.resolveDir = resolveDir;
