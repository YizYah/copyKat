"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abbreviationBody = '{{[ \\t]*(start|end|custom|customStart|customEnd)[ \\t]+(\\S*)[ \\t]*}}';
exports.regExTemplateAbbreviation = new RegExp(abbreviationBody, 'g');
