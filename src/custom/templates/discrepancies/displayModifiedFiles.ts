import {Result} from 'dir-compare'
import {attention, generalOption} from '../../shared/constants/chalkColors'
import {links} from '../../shared/constants'

export function displayModifiedFiles(res: Result) {
  if (!res || !res.diffSet) return
  const modifiedFileInfo = res.diffSet.filter((file: any) => (file.state === 'distinct'))
  const modifiedFiles = modifiedFileInfo.map((file: any) => {
    return file.relativePath.substring(1) + '/' + file.name1
  })

  if (modifiedFiles.length === 0) {
    // eslint-disable-next-line no-console
    console.log('The files shared by the model code base ' +
            'and the generated sample are identical.')
    return
  }

  // eslint-disable-next-line no-console
  console.log(attention('The following files differ between the model and the generated samples:'))
  // eslint-disable-next-line no-console
  modifiedFiles.map(fileName => console.log(`\t${fileName}`))

  // eslint-disable-next-line no-console
  console.log(`See ${generalOption(links.ADDING_CUSTOM_FILES)}` +
        ' for how to remove these discrepancies.')
}
