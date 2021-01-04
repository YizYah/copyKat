"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequired = (paramName, commandName, flag) => {
    //   this.log("param ${paramName} is required for this creation)
    //   return
    if (flag && commandName) {
        throw new Error(`Error calling command ${commandName}: the parameter '${paramName}' is required.
     You can use the flag '--${paramName}' or '-${flag}'.`);
        //
        // return process.exit(1)
    }
    throw new Error(`param ${paramName} is required for this creation`);
};
