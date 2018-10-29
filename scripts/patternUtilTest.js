const assert = require("assert");
const lib = require("../src/patternUtil.js");

let repeatChar = lib.repeatChar;
assert.deepEqual(repeatChar("!",3),"!!!");
assert.deepEqual(repeatChar("$",4),"$$$$");
assert.deepEqual(repeatChar("*",5),"*****");
assert.deepEqual(repeatChar(" ",5),"     ");
assert.deepEqual(repeatChar("",),"");

let heightToBeTaken = lib.heightToBeTaken;
assert.deepEqual(heightToBeTaken("9"),9);
assert.deepEqual(heightToBeTaken("8"),7);
assert.deepEqual(heightToBeTaken("5"),5);
assert.deepEqual(heightToBeTaken("14"),13);
assert.deepEqual(heightToBeTaken("22"),21);

console.log("test passed");
