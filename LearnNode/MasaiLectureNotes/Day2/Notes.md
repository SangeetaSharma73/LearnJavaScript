# Node.js Modules

# Node uses:
- js is async
- parallel tasks by the help of web api
- js to program your backend systems.

- application that works async and are input and output heavy, those applications can be built using this. 


## Node versions 
- Lts version = Long term support version which is stable 

## Node Modules
- Inbuilt , Custom and External

## npm 
- node package manager 
##  npx 
- Node Package Executer

## CJS - 
common js
- Sync Import 

### Example(CJS):
```js
const add = require("add"); //import
module.exports = add //export
```

## ESM - 
Ecma Script Module
- Async Import
```js
import {add} from "./add";
export {add}
```