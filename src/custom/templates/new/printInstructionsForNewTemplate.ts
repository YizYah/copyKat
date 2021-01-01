import {links, suffixes} from '../../shared/constants'
import {attention, generalOption} from '../../shared/constants/chalkColors'

const emoji = require('node-emoji')

export function printInstructionsForNewTemplate(templateDir: string) {
  return `Your template has been created at ${templateDir}. ` + emoji.get('smiley_cat') +
    attention(`See documentation at ${links.DOCUMENTATION}`) +
    `
You may want to paste the following lines into your terminal
to set the variables used in help and documentation examples:

TEMPLATE=${templateDir}
MODEL=${templateDir}${suffixes.MODEL_DIR}
CODE=${templateDir}${suffixes.SAMPLE_DIR}

` +
    'To make the template functional, call ' + generalOption('copykat chase $TEMPLATE') +
    ' to be guided through the steps for getting the correct files to generate.'
}
