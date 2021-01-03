/*
This file has been partially generated with the template 'ns-template-easy-oclif-cli'.

To permit updates to the generated portions of this code in the future,
please follow all rules at https://ns-flip.nostack.net//Safe-Custom-Code
*/
/* ns__file unit: static-command, comp: chase.test.ts */

/* ns__start_section imports */
import {expect, test} from '@oclif/test'
/* ns__custom_start customImports */
import {resolveDir} from '../../src/custom/shared/resolveDir'

/* ns__custom_end customImports */
/* ns__end_section imports */

/* ns__custom_start tests */
// replace everything in this tests section when you modify your code.
describe('chase', () => {
  const bogusTemplateDir = 'nonexistentTemplate'
  const fullBogusTemplateDir = resolveDir(bogusTemplateDir)

  test
  .stderr()
  .command(['chase', fullBogusTemplateDir])
  .catch(error => {
    expect(error.message).to.contain(`template directory ${fullBogusTemplateDir} not found`)
  })
  .it('requires proper args')

  // test
  // .stdout()
  // .command(['chase', fullBogusTemplateDir])
  // .it('runs chase with all args and flags', ctx => {
  //   expect(ctx.stdout).to.contain('template directory ${fullBogusModelDir} not found')
  // })
})
/* ns__custom_end tests */
