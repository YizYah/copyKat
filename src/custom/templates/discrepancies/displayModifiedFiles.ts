import {Result} from 'dir-compare'
import {attention, generalOption} from '../../shared/constants/chalkColors'
import {links} from '../../shared/constants'
import {dingKats} from '../../shared/constants/types/dingKats'

export function displayModifiedFiles(res: Result) {
  if (!res || !res.diffSet) return
  const modifiedFileInfo = res.diffSet.filter((file: any) => (file.state === 'distinct'))
  const modifiedFiles = modifiedFileInfo.map((file: any) => {
    return file.relativePath.substring(1) + '/' + file.name1
  })

  if (modifiedFiles.length === 0) {
    // eslint-disable-next-line no-console
    return
  }

  // eslint-disable-next-line no-console
  console.log(dingKats.CRYING + attention(' The following files differ') +
    ' between the model and the generated samples:')
  // eslint-disable-next-line no-console
  modifiedFiles.map(fileName => console.log(`\t${fileName}`))

  // eslint-disable-next-line no-console
  console.log(`See ${generalOption(links.ADDING_CUSTOM_FILES)}` +
        ' for how to remove these discrepancies. ' + dingKats.GO_TO)
}
