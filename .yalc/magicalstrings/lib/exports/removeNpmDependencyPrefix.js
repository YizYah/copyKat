"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeNpmDependencyPrefix(dependency) {
    if (!dependency)
        return undefined;
    return dependency.replace('^', '').replace('~', '');
}
exports.removeNpmDependencyPrefix = removeNpmDependencyPrefix;
