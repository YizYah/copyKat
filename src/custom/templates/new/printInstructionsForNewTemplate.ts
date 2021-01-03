import {links, suffixes} from '../../shared/constants'
import {attention, generalOption} from '../../shared/constants/chalkColors'
import {dingKats} from '../../shared/constants/types/dingKats'

export function printInstructionsForNewTemplate(templateDir: string) {
  return dingKats.SMILING + ` Your template has been created at ${templateDir}.
  Here are three suggestions to get it going fast:

` +
    '\n' + dingKats.GO_TO +
    ' To make the template functional, call ' + generalOption('copykat chase $TEMPLATE') +
    ' to be guided through the steps for getting the correct files to generate.' +

    '\n\n' + dingKats.GO_TO + attention(` See documentation at ${links.DOCUMENTATION}`) +

    '\n\n' + dingKats.GO_TO +
    ` You may want to paste the following lines into your terminal
to set the variables used in help and documentation examples:
  TEMPLATE=${templateDir}
  MODEL=${templateDir}${suffixes.MODEL_DIR}
  CODE=${templateDir}${suffixes.SAMPLE_DIR}

`
}
