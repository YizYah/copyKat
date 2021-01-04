"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs-extra');
const yaml = require('js-yaml');
async function getConfig(templateDir) {
    let config;
    const configFile = `${templateDir}/config.yml`;
    try {
        const configYaml = fs.readFileSync(configFile, 'utf8');
        config = await yaml.safeLoad(configYaml);
    }
    catch (error) {
        throw new Error(`error finding the config file ${configFile}.
It may be that the template location is faulty, or that the file does not exist
or is not properly set up:
${error}`);
    }
    return config;
}
exports.getConfig = getConfig;
