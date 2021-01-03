// import {links, suffixes} from '../../shared/constants'
// import {attention, generalOption} from '../../shared/constants/chalkColors'
import {dingKats} from '../../shared/constants/types/dingKats'

export function printInstructionsForNewTemplate(templateDir: string) {
  return dingKats.SMILING + ` Your template has been created at ${templateDir}.

  `
  // +
  // ' To make the template functional, call ' + generalOption('copykat chase $TEMPLATE') +
  // ' to be guided through the steps for getting the correct files to generate.'
}
