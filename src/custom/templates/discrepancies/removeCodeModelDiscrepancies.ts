import {links, magicStrings, suffixes} from '../../shared/constants'
import {Configuration} from '../../shared/constants/types/configuration'
import {getConfig} from '../../shared/configs/getConfig'
import {handleNewFiles} from '../new/files/handleNewFiles'
import {compareSync, Result} from 'dir-compare'
import {getIgnoredList} from '../../shared/configs/getIgnoredList'
import {handleUniqueModelFiles} from './handleUniqueModelFiles'
import {generalOption} from '../../shared/constants/chalkColors'
import {displayModifiedFiles} from './displayModifiedFiles'
import {GenerationRequired} from './GenerationRequired'
import {displayInstructionsForNextStep} from './displayInstructionsForNextStep'

const emoji = require('node-emoji')

async function getDiscrepantFiles(
  config: Configuration, codeDir: string, modelDir: string
) {
  const allIgnored = getIgnoredList(config).map(dir => {
    if (dir.includes('/')) return '/' + dir
    return dir
  })
  let excludeFilter = allIgnored.join(',')
  if (excludeFilter.length > 0) excludeFilter += ','
  excludeFilter += magicStrings.DEFAULT_EXCLUDED_FOLDERS

  const res: Result = compareSync(
    codeDir, modelDir, {
      excludeFilter,
      compareContent: true,
    }
  )
  return res
}

export async function removeCodeModelDiscrepancies(
  templateDir: string, code: string, model: string
) {
  const finalCode = code || templateDir + suffixes.SAMPLE_DIR
  const finalModel = model || templateDir + suffixes.MODEL_DIR

  const config: Configuration = await getConfig(templateDir)
  const res = await getDiscrepantFiles(
    config, finalCode, finalModel
  )

  if (!res.diffSet) {
    // eslint-disable-next-line no-console
    console.log('AWESOME! Your template is generating your model code base exactly! ' + emoji.get('smiley_cat'))
    // eslint-disable-next-line no-console
    console.log('\nBut, that does not mean that your template is fully functional yet.' +
      ' You have to replace things that were hard-coded to be what is in your code base' +
      ' with custom generated stuff. Not to worry... check out ' +
    generalOption(links.MAKING_FILES_CUSTOMIZABLE) +
    ' for how to replace your sample with what your really need.')
    return
  }

  let generationRequired: GenerationRequired = await handleNewFiles(
    res, templateDir, finalCode, finalModel
  )
  const newGenerationRequired = await handleUniqueModelFiles(
    res, templateDir, finalModel, config
  )
  if (newGenerationRequired > generationRequired) generationRequired = newGenerationRequired

  displayModifiedFiles(res)  // TODO: replace with handleModifiedFiles

  displayInstructionsForNextStep(templateDir, generationRequired)
}
