
[//]: # ( ns__file unit: standard, comp: README.md )

[//]: # ( ns__custom_start beginning )

[//]: # ( ns__custom_end beginning )

[//]: # ( ns__start_section intro )

[//]: # ( ns__custom_start description )
copykat
======
pounce on a great code base and build a generator based on it

[//]: # ( ns__custom_end description )

[//]: # ( ns__custom_start afterDescription )
![happy cat](src/custom/images/COPYKAT-GIF3.gif)

[//]: # ( ns__custom_end afterDescription )

[//]: # ( ns__custom_start badges )

[//]: # ( ns__start_section usageSection )
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/copykat.starter.svg)](https://npmjs.org/package/copykat.starter)
[![Downloads/week](https://img.shields.io/npm/dw/copykat.starter.svg)](https://npmjs.org/package/copykat.starter)
[![License](https://img.shields.io/npm/l/copykat.starter.svg)](https://github.com//blob/master/package.json)

[//]: # ( ns__custom_end badges )

[//]: # ( ns__end_section intro )


[//]: # ( ns__custom_start beforeToc )
You'd be surprised how easy it is to create your own generator. Snif out a good example, 
then pounce and finally chase it until it's just where you want it to be.

The generators use [ns-flip](https://www.npmjs.com/package/ns-flip), a re-generator tool.  
You can release your generator and then make changes as needed.  Whenever you update it,
your users can apply them.  For example, see [easy-oclif-cli](https://www.npmjs.com/package/easy-oclif-cli).

[//]: # ( ns__custom_end beforeToc )

[//]: # ( ns__custom_start toc )
<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

[//]: # ( ns__custom_end toc )

[//]: # ( ns__custom_start usage )
# Usage
<!-- usage -->
```sh-session
$ npm install -g copykat
$ copykat COMMAND
running command...
$ copykat (-v|--version|version)
copykat/1.0.0 linux-x64 node-v14.9.0
$ copykat --help [COMMAND]
USAGE
  $ copykat COMMAND
...
```
<!-- usagestop -->

[//]: # ( ns__custom_end usage )

[//]: # ( ns__end_section usageSection )


[//]: # ( ns__start_section commandsSection )
# Commands


[//]: # ( ns__custom_start commands )
<!-- commands -->
* [`copykat chase TEMPLATEDIR`](#copykat-chase-templatedir)
* [`copykat help [COMMAND]`](#copykat-help-command)
* [`copykat pounce MODEL`](#copykat-pounce-model)

## `copykat chase TEMPLATEDIR`

compare generated code to your model, changing both until you've replicated the model with your template

```
USAGE
  $ copykat chase TEMPLATEDIR

ARGUMENTS
  TEMPLATEDIR  the path to your template

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ copykat chase sampleTemplateDir 
  You have executed the chase command...
```

_See code: [src/commands/chase.ts](https://github.com/YizYah/copykat/blob/v1.0.0/src/commands/chase.ts)_

## `copykat help [COMMAND]`

display help for copykat

```
USAGE
  $ copykat help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

## `copykat pounce MODEL`

specify a model code base and generate a template to build it

```
USAGE
  $ copykat pounce MODEL

ARGUMENTS
  MODEL  path to a model code base from which you will generate your template

OPTIONS
  -h, --help                     show CLI help
  -t, --templateDir=templateDir  path to the generator that you will build

EXAMPLE
  $ copykat pounce sampleModel -t sampleTemplateDir 
  You have executed the pounce command...
```

_See code: [src/commands/pounce.ts](https://github.com/YizYah/copykat/blob/v1.0.0/src/commands/pounce.ts)_
<!-- commandsstop -->

[//]: # ( ns__custom_end commands )

[//]: # ( ns__end_section commandsSection )
