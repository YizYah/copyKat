"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const fs = require('fs-extra');
const yaml = require('js-yaml');
async function getNsInfo(codeDir) {
    let nsInfo;
    const nsFile = codeDir + `/${constants_1.dirNames.META}/` + constants_1.fileNames.NS_FILE;
    try {
        const nsYml = fs.readFileSync(nsFile, 'utf8');
        nsInfo = await yaml.safeLoad(nsYml);
    }
    catch (error) {
        // eslint-disable-next-line no-console
        console.log('error opening ns.yml');
        throw error;
    }
    return nsInfo;
}
exports.getNsInfo = getNsInfo;
