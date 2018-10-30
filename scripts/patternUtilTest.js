const assert = require("assert");
const { repeatChar , heightToBeTaken , repeatSpacedChars , repeatCharForRectangle } = require("../src/patternUtil.js");

assert.deepEqual(repeatChar("!",3),"!!!");
assert.deepEqual(repeatChar("$",4),"$$$$");
assert.deepEqual(repeatChar("*",5),"*****");
assert.deepEqual(repeatChar(" ",5),"     ");
assert.deepEqual(repeatChar("",),"");

assert.deepEqual(heightToBeTaken("9"),9);
assert.deepEqual(heightToBeTaken("8"),7);
assert.deepEqual(heightToBeTaken("5"),5);
assert.deepEqual(heightToBeTaken("14"),13);
assert.deepEqual(heightToBeTaken("22"),21);

assert.deepEqual(repeatSpacedChars(5,"*","*","*"),"*****");
assert.deepEqual(repeatSpacedChars(5," ","*"," ")," *** ");
assert.deepEqual(repeatSpacedChars(5,"*"," ","*"),"*   *");
assert.deepEqual(repeatSpacedChars(7," ","*"," ")," ***** ");
assert.deepEqual(repeatSpacedChars(7,"*"," ","*"),"*     *");

assert.deepEqual(repeatCharForRectangle(1,"*","*","*"),"*");
assert.deepEqual(repeatCharForRectangle(3,"*","*","*"),"***");
assert.deepEqual(repeatCharForRectangle(2,"*","*","*"),"**");
assert.deepEqual(repeatCharForRectangle(3,"*"," ","*"),"* *");
assert.deepEqual(repeatCharForRectangle(3," ","*"," ")," * ");
assert.deepEqual(repeatCharForRectangle(5,"*"," ","*"),"*   *");

