"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const fs = require('fs-extra');
const yaml = require('js-yaml');
async function setNsInfo(codeDir, nsInfo) {
    const nsFile = codeDir + `/${constants_1.dirNames.META}/` + constants_1.fileNames.NS_FILE;
    let outputContents;
    try {
        if (nsInfo) {
            outputContents = yaml.safeDump(nsInfo);
            await fs.outputFile(nsFile, outputContents);
        }
    }
    catch (error) {
        throw new Error(`error updating the nsFile ${nsFile}.
      Info = ${JSON.stringify(nsInfo, null, 2)}.
      Output contents = ${outputContents}: ${error}`);
    }
}
exports.setNsInfo = setNsInfo;
