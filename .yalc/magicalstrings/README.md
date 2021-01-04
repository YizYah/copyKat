a lot of constants and some incantations for working with genies.

# Contents
## Config Files
There are 3 functions for working with config files.
```
const {getConfig} = require('magicalstrings').configs 
```
```
const {setConfig} = require('magicalstrings').configs 
```
```
const {getIgnoredList} = require('magicalstrings').configs 
```


## Settings
These functions are for retrieving and updating settings.
```
getNsInfo
```
```
setNsInfo
```

## Constants
chalkColors: a number of terms used consistently in the UI 

fileOptions


Other Constants

parseSpecName

configuration

## Types
### custom
custom

### schema
schema

### dingbats
```
dingKats 
```

### nsInfo
nsInfo

## RegEx
A number of Regex utilities.

* regExCleanupText
* regExCustomCleanup
* regExCustomLocation
* regExFileInfo
* regExNewCustomLocation
* regExReplacedCodeSection
* regExObjectValueString
* regExShared
* regExTemplateAbbreviation

## Functions
Several functions used by genies and copykats.

* inflections
* testCodeDir
* isRequired
* ensureDirectory
* codeNameFromPath
* resolveDir
* inflections
* dirOptions
* removeNpmDependencyPrefix
* copyCodeBaseToNewDir
* fileMatchesCustomFileFilter
* moveOverIgnored
* errorMessage
