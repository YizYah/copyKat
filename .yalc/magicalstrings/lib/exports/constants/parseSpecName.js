"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSpecName = (text) => {
    const textFields = text.split('#');
    if (textFields.length > 2) {
        throw new Error(`more than one pound sign ('#') in the entry '${textFields}'`);
    }
    let nameInfo = textFields[0].split('__');
    let prefix = '';
    if (textFields.length === 2) {
        nameInfo = textFields[1].split('__');
        prefix = textFields[0];
    }
    const info = {
        name: nameInfo[0],
        detail: '',
        prefix,
    };
    if (prefix)
        info.prefix = prefix;
    if (nameInfo.length > 1)
        info.detail = nameInfo[1];
    return info;
};
