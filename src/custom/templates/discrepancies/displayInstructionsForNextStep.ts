import {GenerationRequired} from './GenerationRequired'
const {suffixes} = require('magicalstrings').constants
const {dingKats} = require('magicalstrings').constants.types.dingKats
const {generalOption} = require('magicalstrings').constants.chalkColors

export function displayInstructionsForNextStep(templateDir: string, generationRequired: GenerationRequired) {
  if (generationRequired === GenerationRequired.None) return
  let command = `generate ${templateDir}${suffixes.SAMPLE_DIR}`
  if (generationRequired !== GenerationRequired.Code)
    command += ` -t ${templateDir}`
  if (generationRequired === GenerationRequired.Template) command += ' --noSetup'

  // eslint-disable-next-line no-console
  console.log(`${dingKats.GO_TO} You should now regenerate the sample code using geenee.
  If you have geenee installed globally [you can do so by running 'npm i -g geenee'], then you can run
      ${generalOption('ns ' +  command)}
  Otherwise, run:
      ${generalOption('npx geenee ' +  command)}

  After you have generated, run
      ${generalOption('copykat chase ' + templateDir)}
  to search for additional problems.
  `)
}
