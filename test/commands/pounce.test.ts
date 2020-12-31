/*
This file has been partially generated with the template 'ns-template-easy-oclif-cli'.

To permit updates to the generated portions of this code in the future,
please follow all rules at https://ns-flip.nostack.net//Safe-Custom-Code
*/
/* ns__file unit: static-command, comp: pounce.test.ts */

/* ns__start_section imports */
import {expect, test} from '@oclif/test'
/* ns__custom_start customImports */
/* ns__custom_end customImports */
/* ns__end_section imports */

/* ns__custom_start tests */
// replace everything in this tests section when you modify your code.
describe('pounce', () => {
  test
  .stdout()
  .command(['pounce', 'sampleModel', '-t', 'sampleTemplateDir'])
  .it('runs pounce with all args and flags', ctx => {
    expect(ctx.stdout).to.contain('You have executed the pounce command')
  })

  test
  .stderr()
  .command(['pounce', 'sampleBadArgValue', '-t', 'sampleTemplateDir'])
  .catch(error => {
    expect(error.message).to.contain('bad arg value')
  })
  .it('requires proper args')
})
/* ns__custom_end tests */
