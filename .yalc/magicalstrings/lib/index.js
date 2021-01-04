"use strict";
module.exports.configs = {
    getConfig: require('./exports/configs/getConfig').getConfig,
    getIgnoredList: require('./exports/configs/getIgnoredList').getIgnoredList,
    setConfig: require('./exports/configs/setConfig').setConfig,
};
module.exports.nsFiles = {
    getNsInfo: require('./exports/nsFiles/getNsInfo').getNsInfo,
    setNsInfo: require('./exports/nsFiles/setNsInfo').setNsInfo
};
module.exports.constants = require('./exports/constants/index');
module.exports.constants.chalkColors = require('./exports/constants/chalkColors');
module.exports.constants.fileOptions = require('./exports/constants/fileOptions');
module.exports.constants.parseSpecName = require('./exports/constants/parseSpecName');
module.exports.constants.types = {};
module.exports.constants.types.configuration = require('./exports/constants/types/configuration');
module.exports.constants.types.custom = require('./exports/constants/types/custom');
module.exports.constants.types.dingKats = require('./exports/constants/types/dingKats');
module.exports.constants.types.nsInfo = require('./exports/constants/types/nsInfo');
module.exports.constants.types.schema = require('./exports/constants/types/schema');
module.exports.constants.Regex = {};
module.exports.constants.Regex.regExCleanupText = require('./exports/constants/Regex/regExCleanupText');
module.exports.constants.Regex.regExCustomCleanup = require('./exports/constants/Regex/regExCustomCleanup');
module.exports.constants.Regex.regExCustomLocation = require('./exports/constants/Regex/regExCustomLocation');
module.exports.constants.Regex.regExFileInfo = require('./exports/constants/Regex/regExFileInfo');
module.exports.constants.Regex.regExNewCustomLocation = require('./exports/constants/Regex/regExNewCustomLocation');
module.exports.constants.Regex.regExObjectValueString = require('./exports/constants/Regex/regExObjectValueString');
module.exports.constants.Regex.regExReplacedCodeSection = require('./exports/constants/Regex/regExReplacedCodeSection');
module.exports.constants.Regex.regExShared = require('./exports/constants/Regex/regExShared');
module.exports.constants.Regex.regExTemplateAbbreviation = require('./exports/constants/Regex/regExTemplateAbbreviation');
module.exports.testCodeDir = require('./exports/testCodeDir');
module.exports.isRequired = require('./exports/isRequired');
module.exports.ensureDirectory = require('./exports/ensureDirectory');
module.exports.codeNameFromPath = require('./exports/codeNameFromPath');
module.exports.resolveDir = require('./exports/resolveDir');
module.exports.inflections = require('./exports/inflections');
module.exports.dirOptions = require('./exports/dirOptions');
module.exports.removeNpmDependencyPrefix = require('./exports/removeNpmDependencyPrefix');
module.exports.copyCodeBaseToNewDir = require('./exports/copyCodeBaseToNewDir');
module.exports.fileMatchesCustomFileFilter = require('./exports/fileMatchesCustomFileFilter');
module.exports.moveOverIgnored = require('./exports/moveOverIgnored');
module.exports.errorMessage = require('./exports/errorMessage');
