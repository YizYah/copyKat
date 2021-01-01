import {GenerationRequired} from './GenerationRequired'
import {suffixes} from '../../shared/constants'

export function displayInstructionsForNextStep(templateDir: string, generationRequired: GenerationRequired) {
  console.log(`** generationRequired =${generationRequired}`)
  if (generationRequired === GenerationRequired.None) return
  let command = `generate ${templateDir}${suffixes.SAMPLE_DIR}`
  if (generationRequired !== GenerationRequired.Code)
    command += ` -t ${templateDir}`
  if (generationRequired === GenerationRequired.Template) command += ' --noSetup'

  // eslint-disable-next-line no-console
  console.log(`You should now regenerate the sample code using ns-flip.
  If you have ns-flip installed globally [do so by running 'npm i -g ns-flip'], then you can run
      ns ${command}
  Otherwise, run:
      npx ns-flip ${command}
  `)
}
