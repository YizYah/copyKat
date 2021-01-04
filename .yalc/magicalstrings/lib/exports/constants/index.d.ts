export declare const associationTypes: {
    MULTIPLE: string;
    SINGLE_REQUIRED: string;
    SELECTABLE: string;
    VIEWABLE: string;
};
export declare const dataTypes: {
    STRING: string;
    BOOLEAN: string;
    NUMBER: string;
    GROUPING: string;
};
export declare const nodeTypes: {
    NONROOT: string;
    ROOT: string;
    PROPERTY: string;
    SELECTABLE: string;
};
export declare const unitTypes: {
    INTERACTIVE: string;
    DATA_SOURCE: string;
};
export interface BoilerPlateInfoType {
    componentType: string;
    dataType: string;
    nodeType: string;
}
export declare const boilerplateDir: string;
export declare const typePrefixes: {
    CREATE: string;
    SELECT: string;
    USE: string;
    CONSTRAIN: string;
};
export declare const constraintTypes: {
    ID: string;
    VALUE: string;
};
export declare const unitPrefixes: {
    SELECTABLE: string;
};
export declare const docSubjects: {
    ADD_FILES: string;
    TEST_RESULTS_DOCUMENTATION: string;
    SAFE_CODE: string;
    MAKING_FILES_CUSTOMIZABLE: string;
};
export declare const links: {
    DOCUMENTATION: string;
    TEST_RESULTS: string;
    SAFE_CODE_RULES: string;
    ADDING_CUSTOM_FILES: string;
    MAKING_FILES_CUSTOMIZABLE: string;
};
export declare const magicStrings: {
    STANDARD_UNIT: string;
    DEFAULT_EXCLUDED_FOLDERS: string;
};
export declare const placeholders: {
    CLOSE_COMMENT: string;
    OPEN_COMMENT: string;
    SLUG: string;
};
export declare const dirNames: {
    FILE_TEMPLATES: string;
    GENERAL: string;
    HELPERS: string;
    META: string;
    PARTIALS: string;
    SAMPLES: string;
    STANDARD: string;
    STATIC: string;
    TEMPLATE: string;
};
export declare const fileNames: {
    CONFIG_FILE: string;
    CUSTOM_CODE_FILE: string;
    DIFFS: string;
    GENERIC_FILE: string;
    NS_FILE: string;
    PACKAGE_INFO: string;
    README_FILE: string;
    SAMPLE_NS_FILE: string;
    START_OF_FILE_FILE: string;
    TESTS_LOG: string;
};
export declare const META_DELIMITER = "__";
export declare const ADD_NEW_VALUE: string;
export declare const menuChoices: {
    QUIT: string;
    ADD_NEW: string;
};
export declare const commands: {
    GENERATE: string;
};
export declare const feedbackForm: {
    URL: string;
    fields: {
        MESSAGE_TYPE: string;
        SUBJECT: string;
        MESSAGE: string;
        EMAIL: string;
    };
};
export declare const suffixes: {
    BACKUP_DIR: string;
    TEST_DIR: string;
    STARTUP_DIR: string;
    SAMPLE_DIR: string;
    MODEL_DIR: string;
};
export declare const docPages: {
    BUILDING_CODE_BASE: string;
    SETUP: string;
};
export declare const markupTags: {
    CUSTOM_START: string;
    CUSTOM_END: string;
    SECTION_START: string;
    SECTION_END: string;
    REPLACEMENT_START: string;
    REPLACEMENT_END: string;
    FILE_INFO: string;
};
export declare const standardIgnored: string[];
export interface Delimiters {
    open: string;
    close: string;
}
export declare const questionNames: {
    SETTINGS_TYPE: string;
};
export declare const answerValues: {
    settingsTypes: {
        GENERAL: string;
        STATIC: string;
        DYNAMIC: string;
    };
};
