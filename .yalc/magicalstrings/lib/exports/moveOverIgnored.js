"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getIgnoredList_1 = require("./configs/getIgnoredList");
// import execa = require('execa');
const fs = require('fs-extra');
async function moveOverIgnored(sourceDir, updatedDir, config) {
    // const testDir = `${sourceDir}${names.TEST_DIR_SUFFIX}`
    const allIgnored = getIgnoredList_1.getIgnoredList(config);
    await Promise.all(allIgnored.map(async (fileOrFolder) => {
        try {
            if (await fs.pathExists(`${sourceDir}/${fileOrFolder}`)) {
                // await execa(
                //   'cp',
                //   ['-r', `${sourceDir}/${fileOrFolder}`, `${updatedDir}/${fileOrFolder}`],
                // )
                await fs.copy(`${sourceDir}/${fileOrFolder}`, `${updatedDir}/${fileOrFolder}`);
            }
        }
        catch (error) {
            // console.log(error)
            throw new Error(`couldn't copy over ${fileOrFolder} from ${sourceDir} to ${updatedDir}: ${error}`);
        }
    }));
}
exports.moveOverIgnored = moveOverIgnored;
