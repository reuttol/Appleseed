//! Difference between node.js require and ES6 import and export: Although require function and ES6 import and export share a lot in common and seem to perform the same function in code but they are different in many ways.

//?                               REQUIRE                        |                    VS ES6 IMPORT AND EXPORT
// Require is Non-lexical, it stays where they have put the file.| Import is lexical, it gets sorted to the top of the file.
// It can be called at any time and place in the program.        | It can be called at any time and place in the program.
// You can directly run the code with require statement.         | To run a program containing import statement you have to use experimental
//                                                               | module feature flag.
//If you want to use require module then you have to save        |If you want to use import module then you have to save
//file with ‘.js’ extension.                                     |file with ‘.mjs’ extension.

//! NOTE: You must note that you can’t use require and import at the same time in your node program and it is more preferred to use require instead of import as you are required to use the experimental module flag feature to run import program.

// Node.js >= v13

//! Save the file with .mjs extension, or
//! Add { "type": "module" } in the nearest package.json.
//! You only need to do one of the above to be able to use ECMAScript modules.

//Node.js <= v12
// If you are using Node.js version 9.6 - 12, save the file with ES6 modules with .mjs extension and run it like:
// node --experimental-modules my-app.mjs

import * as fs from "fs";

fs.writeFileSync("text.txt", "Test");

import add, { changeName, hello } from "./importFromMe.mjs";
const sum = add(2, 4);
const newName = changeName("Itzik");
console.log(sum);
console.log(newName);
console.log(hello);