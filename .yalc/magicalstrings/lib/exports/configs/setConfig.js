"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const fs = require('fs-extra');
const yaml = require('js-yaml');
async function setConfig(templateDir, config) {
    const configFile = templateDir + '/' + constants_1.fileNames.CONFIG_FILE;
    try {
        if (config)
            await fs.outputFile(configFile, yaml.safeDump(config));
    }
    catch (error) {
        throw new Error(`error finding the config file ${configFile}.
It may be that the template location is faulty, or that the file does not exist
or is not properly set up:
${error}`);
    }
}
exports.setConfig = setConfig;
