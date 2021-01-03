import {GenerationRequired} from './GenerationRequired'
import {suffixes} from '../../shared/constants'
import {dingKats} from '../../shared/constants/types/dingKats'
import {generalOption} from '../../shared/constants/chalkColors'

export function displayInstructionsForNextStep(templateDir: string, generationRequired: GenerationRequired) {
  if (generationRequired === GenerationRequired.None) return
  let command = `generate ${templateDir}${suffixes.SAMPLE_DIR}`
  if (generationRequired !== GenerationRequired.Code)
    command += ` -t ${templateDir}`
  if (generationRequired === GenerationRequired.Template) command += ' --noSetup'

  // eslint-disable-next-line no-console
  console.log(`${dingKats.GO_TO} You should now regenerate the sample code using ns-flip.
  If you have ns-flip installed globally [do so by running 'npm i -g ns-flip'], then you can run
      ${generalOption('ns' +  command)}
  Otherwise, run:
      ${generalOption('npx ns-flip' +  command)}

  After you have generated again, again run
      ${generalOption('copykat chase ' + templateDir)}
  `)
}
