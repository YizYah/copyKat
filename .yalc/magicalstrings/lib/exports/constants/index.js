"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.associationTypes = {
    MULTIPLE: 'multiple',
    SINGLE_REQUIRED: 'singleRequired',
    SELECTABLE: 'selectable',
    VIEWABLE: 'viewable',
};
exports.dataTypes = {
    STRING: 'string',
    BOOLEAN: 'boolean',
    NUMBER: 'number',
    GROUPING: 'grouping',
};
exports.nodeTypes = {
    NONROOT: 'nonRoot',
    ROOT: 'Root',
    PROPERTY: 'Property',
    SELECTABLE: 'selectable',
};
// export const formTypes = {
//   CREATION: 'creation',
//   SINGLE_INSTANCE: 'single',
//   LIST: 'list',
//   SELECTION: 'selection',
// }
exports.unitTypes = {
    INTERACTIVE: 'interactive',
    DATA_SOURCE: 'dataSource',
};
exports.boilerplateDir = `${__dirname}/../../resources/boilerplates`;
exports.typePrefixes = {
    CREATE: 'create',
    SELECT: 'select',
    USE: 'use',
    CONSTRAIN: 'constrain',
};
exports.constraintTypes = {
    ID: 'ID',
    VALUE: 'value',
};
exports.unitPrefixes = {
    SELECTABLE: 'selectable',
};
const domains = {
    NS_DOMAIN: 'https://www.nostack.net',
    NS_FLIP_NPM: 'https://www.npmjs.com/package/ns-front',
    NS_FLIP_DOMAIN: 'https://ns-flip.nostack.net/',
};
exports.docSubjects = {
    ADD_FILES: 'Add-Files-For-Customization',
    TEST_RESULTS_DOCUMENTATION: 'Understanding-Test-Results',
    SAFE_CODE: 'Safe-Custom-Code',
    MAKING_FILES_CUSTOMIZABLE: 'Making-Files-Customizable',
};
exports.links = {
    DOCUMENTATION: domains.NS_FLIP_DOMAIN,
    TEST_RESULTS: `${domains.NS_FLIP_DOMAIN}/${exports.docSubjects.TEST_RESULTS_DOCUMENTATION}`,
    SAFE_CODE_RULES: `${domains.NS_FLIP_DOMAIN}/${exports.docSubjects.SAFE_CODE}`,
    ADDING_CUSTOM_FILES: `${domains.NS_FLIP_DOMAIN}/${exports.docSubjects.ADD_FILES}`,
    MAKING_FILES_CUSTOMIZABLE: `${domains.NS_FLIP_DOMAIN}/${exports.docSubjects.MAKING_FILES_CUSTOMIZABLE}`,
};
exports.magicStrings = {
    STANDARD_UNIT: 'standard',
    DEFAULT_EXCLUDED_FOLDERS: 'node_modules,lib,.idea',
};
exports.placeholders = {
    CLOSE_COMMENT: '__NS_CLOSE__',
    OPEN_COMMENT: '__NS_OPEN__',
    SLUG: '__slug__',
};
exports.dirNames = {
    FILE_TEMPLATES: 'fileTemplates',
    GENERAL: 'general',
    HELPERS: 'helpers',
    META: 'meta',
    PARTIALS: 'partials',
    SAMPLES: 'samples',
    STANDARD: 'standard',
    STATIC: 'static',
    TEMPLATE: 'template',
};
exports.fileNames = {
    CONFIG_FILE: 'config.yml',
    CUSTOM_CODE_FILE: 'customCode.json',
    DIFFS: 'diffs',
    GENERIC_FILE: 'generic.hbs',
    NS_FILE: 'ns.yml',
    PACKAGE_INFO: 'packageInfo.json.hbs',
    README_FILE: 'README.md',
    SAMPLE_NS_FILE: 'sample.ns.yml',
    START_OF_FILE_FILE: 'START_OF_FILE.hbs',
    TESTS_LOG: 'tests.log',
};
exports.META_DELIMITER = '__';
exports.ADD_NEW_VALUE = exports.META_DELIMITER + 'add' + exports.META_DELIMITER;
exports.menuChoices = {
    QUIT: 'quit',
    ADD_NEW: 'add',
};
exports.commands = {
    GENERATE: 'generate',
};
exports.feedbackForm = {
    URL: 'https://docs.google.com/forms/d/1DooR4toIL-15Ozk6cxB1A8gMJR5e3dntalYAr60PM9Q/formResponse',
    fields: {
        MESSAGE_TYPE: 'entry.2118049504',
        SUBJECT: 'entry.1563192314',
        MESSAGE: 'entry.7330959',
        EMAIL: 'entry.1551316295',
    },
};
exports.suffixes = {
    BACKUP_DIR: '.backup',
    TEST_DIR: '.test',
    STARTUP_DIR: '.starter',
    SAMPLE_DIR: '.sample',
    MODEL_DIR: '.model',
};
exports.docPages = {
    BUILDING_CODE_BASE: 'Building-Code-Bases',
    SETUP: 'Setup-Sequence',
};
exports.markupTags = {
    CUSTOM_START: 'ns__custom_start',
    CUSTOM_END: 'ns__custom_end',
    SECTION_START: 'ns__start_section',
    SECTION_END: 'ns__end_section',
    REPLACEMENT_START: 'ns__start_replacement',
    REPLACEMENT_END: 'ns__end_replacement',
    FILE_INFO: 'ns__file',
};
exports.standardIgnored = [
    'package.json',
    '.git',
    'package-lock.json',
    'meta',
    '.idea',
];
exports.questionNames = {
    SETTINGS_TYPE: 'settingsType',
};
exports.answerValues = {
    settingsTypes: {
        GENERAL: 'general',
        STATIC: 'static',
        DYNAMIC: 'dynamic',
    },
};
