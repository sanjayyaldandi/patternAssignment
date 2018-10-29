const assert = require("assert");
const generateRectangle = require("../src/patternLibrary.js").generateRectangle;
const generateTriangle = require("../src/patternLibrary.js").generateTriangle;
const generateDiamond = require("../src/patternLibrary.js").generateDiamond;

//---------------------------------------------------------------------//

let actualOutput_filledRectangle_5_3 = generateRectangle("filled",5,3);

let expectedOutput_filledRectangle_5_3 = "";
expectedOutput_filledRectangle_5_3 += "*****\n";
expectedOutput_filledRectangle_5_3 += "*****\n";
expectedOutput_filledRectangle_5_3 += "*****";

assert.deepEqual(actualOutput_filledRectangle_5_3,expectedOutput_filledRectangle_5_3);

let actualOutput_filledRectangle_6_2 = generateRectangle("filled",6,2);

let expectedOutput_filledRectangle_6_2 = "";
expectedOutput_filledRectangle_6_2 += "******\n";
expectedOutput_filledRectangle_6_2 += "******";

assert.deepEqual(actualOutput_filledRectangle_6_2,expectedOutput_filledRectangle_6_2);

let actualOutput_filledRectangle_20_7 = generateRectangle("filled",20,7);

let expectedOutput_filledRectangle_20_7 = "";
expectedOutput_filledRectangle_20_7 += "********************\n";
expectedOutput_filledRectangle_20_7 += "********************\n";
expectedOutput_filledRectangle_20_7 += "********************\n";
expectedOutput_filledRectangle_20_7 += "********************\n";
expectedOutput_filledRectangle_20_7 += "********************\n";
expectedOutput_filledRectangle_20_7 += "********************\n";
expectedOutput_filledRectangle_20_7 += "********************";

assert.deepEqual(actualOutput_filledRectangle_20_7,expectedOutput_filledRectangle_20_7);

//---------------------------------------------------------------------//

let actualOutput_hollowRectangle_5_5 = generateRectangle("hollow",5,5);

let expectedOutput_hollowRectangle_5_5 = "";
expectedOutput_hollowRectangle_5_5 += "*****\n";
expectedOutput_hollowRectangle_5_5 += "*   *\n";
expectedOutput_hollowRectangle_5_5 += "*   *\n";
expectedOutput_hollowRectangle_5_5 += "*   *\n";
expectedOutput_hollowRectangle_5_5 += "*****";

assert.deepEqual(actualOutput_hollowRectangle_5_5,expectedOutput_hollowRectangle_5_5);

let actualOutput_hollowRectangle_3_3 = generateRectangle("hollow",3,3);

let expectedOutput_hollowRectangle_3_3 = "";
expectedOutput_hollowRectangle_3_3 += "***\n";
expectedOutput_hollowRectangle_3_3 += "* *\n";
expectedOutput_hollowRectangle_3_3 += "***";

assert.deepEqual(actualOutput_hollowRectangle_3_3,expectedOutput_hollowRectangle_3_3);

let actualOutput_hollowRectangle_20_7 = generateRectangle("hollow",20,7);

let expectedOutput_hollowRectangle_20_7 = "";
expectedOutput_hollowRectangle_20_7 += "********************\n";
expectedOutput_hollowRectangle_20_7 += "*                  *\n";
expectedOutput_hollowRectangle_20_7 += "*                  *\n";
expectedOutput_hollowRectangle_20_7 += "*                  *\n";
expectedOutput_hollowRectangle_20_7 += "*                  *\n";
expectedOutput_hollowRectangle_20_7 += "*                  *\n";
expectedOutput_hollowRectangle_20_7 += "********************";

assert.deepEqual(actualOutput_hollowRectangle_20_7,expectedOutput_hollowRectangle_20_7);

//---------------------------------------------------------------------//

let actualOutput_alternatingRectangle_5_5 = generateRectangle("alternating",5,5);

let expectedOutput_alternatingRectangle_5_5 = "";
expectedOutput_alternatingRectangle_5_5 += "*****\n";
expectedOutput_alternatingRectangle_5_5 += "-----\n";
expectedOutput_alternatingRectangle_5_5 += "*****\n";
expectedOutput_alternatingRectangle_5_5 += "-----\n";
expectedOutput_alternatingRectangle_5_5 += "*****";

assert.deepEqual(actualOutput_alternatingRectangle_5_5,expectedOutput_alternatingRectangle_5_5);

let actualOutput_alternatingRectangle_3_3 = generateRectangle("alternating",3,3);

let expectedOutput_alternatingRectangle_3_3 = "";
expectedOutput_alternatingRectangle_3_3 += "***\n";
expectedOutput_alternatingRectangle_3_3 += "---\n";
expectedOutput_alternatingRectangle_3_3 += "***";

assert.deepEqual(actualOutput_alternatingRectangle_3_3,expectedOutput_alternatingRectangle_3_3);

let actualOutput_alternatingRectangle_20_7 = generateRectangle("alternating",20,7);

let expectedOutput_alternatingRectangle_20_7 = "";
expectedOutput_alternatingRectangle_20_7 += "********************\n";
expectedOutput_alternatingRectangle_20_7 += "--------------------\n";
expectedOutput_alternatingRectangle_20_7 += "********************\n";
expectedOutput_alternatingRectangle_20_7 += "--------------------\n";
expectedOutput_alternatingRectangle_20_7 += "********************\n";
expectedOutput_alternatingRectangle_20_7 += "--------------------\n";
expectedOutput_alternatingRectangle_20_7 += "********************";

assert.deepEqual(actualOutput_alternatingRectangle_20_7,expectedOutput_alternatingRectangle_20_7);

//---------------------------------------------------------------------//

let actualOutput_left_6 = generateTriangle("left",6);

let expectedOutput_leftTriangle_6 = "";
expectedOutput_leftTriangle_6 += "*\n";
expectedOutput_leftTriangle_6 += "**\n";
expectedOutput_leftTriangle_6 += "***\n";
expectedOutput_leftTriangle_6 += "****\n";
expectedOutput_leftTriangle_6 += "*****\n";
expectedOutput_leftTriangle_6 += "******";

assert.deepEqual(actualOutput_left_6,expectedOutput_leftTriangle_6);

let actualOutput_left_10 = generateTriangle("left",10);

let expectedOutput_leftTriangle_10 = "";
expectedOutput_leftTriangle_10 += "*\n";
expectedOutput_leftTriangle_10 += "**\n";
expectedOutput_leftTriangle_10 += "***\n";
expectedOutput_leftTriangle_10 += "****\n";
expectedOutput_leftTriangle_10 += "*****\n";
expectedOutput_leftTriangle_10 += "******\n";
expectedOutput_leftTriangle_10 += "*******\n";
expectedOutput_leftTriangle_10 += "********\n";
expectedOutput_leftTriangle_10 += "*********\n";
expectedOutput_leftTriangle_10 += "**********";

assert.deepEqual(actualOutput_left_10,expectedOutput_leftTriangle_10);

let actualOutput_left_7 = generateTriangle("left",7);

let expectedOutput_leftTriangle_7 = "";
expectedOutput_leftTriangle_7 += "*\n";
expectedOutput_leftTriangle_7 += "**\n";
expectedOutput_leftTriangle_7 += "***\n";
expectedOutput_leftTriangle_7 += "****\n";
expectedOutput_leftTriangle_7 += "*****\n";
expectedOutput_leftTriangle_7 += "******\n";
expectedOutput_leftTriangle_7 += "*******";

assert.deepEqual(actualOutput_left_7,expectedOutput_leftTriangle_7);

//---------------------------------------------------------------------//

let actualOutput_rightTriangle_5 = generateTriangle("right",5);

let expectedOutput_rightTriangle_5 = "";
expectedOutput_rightTriangle_5 += "    *\n";
expectedOutput_rightTriangle_5 += "   **\n";
expectedOutput_rightTriangle_5 += "  ***\n";
expectedOutput_rightTriangle_5 += " ****\n";
expectedOutput_rightTriangle_5 += "*****";

assert.deepEqual(actualOutput_rightTriangle_5,expectedOutput_rightTriangle_5);

let actualOutput_rightTriangle_8 = generateTriangle("right",8);

let expectedOutput_rightTriangle_8 = "";
expectedOutput_rightTriangle_8 += "       *\n";
expectedOutput_rightTriangle_8 += "      **\n";
expectedOutput_rightTriangle_8 += "     ***\n";
expectedOutput_rightTriangle_8 += "    ****\n"; 
expectedOutput_rightTriangle_8 += "   *****\n";
expectedOutput_rightTriangle_8 += "  ******\n";
expectedOutput_rightTriangle_8 += " *******\n";
expectedOutput_rightTriangle_8 += "********";

assert.deepEqual(actualOutput_rightTriangle_8,expectedOutput_rightTriangle_8);

let actualOutput_rightTriangle_9 = generateTriangle("right",9);

let expectedOutput_rightTriangle_9 = "";
expectedOutput_rightTriangle_9 += "        *\n"; 
expectedOutput_rightTriangle_9 += "       **\n";
expectedOutput_rightTriangle_9 += "      ***\n";
expectedOutput_rightTriangle_9 += "     ****\n";
expectedOutput_rightTriangle_9 += "    *****\n";
expectedOutput_rightTriangle_9 += "   ******\n";
expectedOutput_rightTriangle_9 += "  *******\n";
expectedOutput_rightTriangle_9 += " ********\n";
expectedOutput_rightTriangle_9 += "*********";

assert.deepEqual(actualOutput_rightTriangle_9,expectedOutput_rightTriangle_9);

//---------------------------------------------------------------------//

let actualOutput_filledDiamond_5 = generateDiamond("filled",5);

let expectedOutput_filledDiamond_5 = "";
expectedOutput_filledDiamond_5 += "  *  \n";
expectedOutput_filledDiamond_5 += " *** \n";
expectedOutput_filledDiamond_5 += "*****\n";
expectedOutput_filledDiamond_5 += " *** \n"; 
expectedOutput_filledDiamond_5 += "  *  ";

assert.deepEqual(actualOutput_filledDiamond_5,expectedOutput_filledDiamond_5);

let actualOutput_filledDiamond_7 = generateDiamond("filled",7);

let expectedOutput_filledDiamond_7 = "";
expectedOutput_filledDiamond_7 += "   *   \n";
expectedOutput_filledDiamond_7 += "  ***  \n";
expectedOutput_filledDiamond_7 += " ***** \n";
expectedOutput_filledDiamond_7 += "*******\n";
expectedOutput_filledDiamond_7 += " ***** \n";
expectedOutput_filledDiamond_7 += "  ***  \n";
expectedOutput_filledDiamond_7 += "   *   ";

assert.deepEqual(actualOutput_filledDiamond_7,expectedOutput_filledDiamond_7);

let actualOutput_filledDiamond_10 = generateDiamond("filled",10);

let expectedOutput_filledDiamond_10 = "";
expectedOutput_filledDiamond_10 += "    *    \n";
expectedOutput_filledDiamond_10 += "   ***   \n";
expectedOutput_filledDiamond_10 += "  *****  \n";
expectedOutput_filledDiamond_10 += " ******* \n";
expectedOutput_filledDiamond_10 += "*********\n";
expectedOutput_filledDiamond_10 += " ******* \n";
expectedOutput_filledDiamond_10 += "  *****  \n";
expectedOutput_filledDiamond_10 += "   ***   \n";
expectedOutput_filledDiamond_10 += "    *    ";

assert.deepEqual(actualOutput_filledDiamond_7,expectedOutput_filledDiamond_7);

//---------------------------------------------------------------------//

let actualOutput_hollowDiamond_9 = generateDiamond("hollow",9);

let expectedOutput_hollowDiamond_9 = "";
expectedOutput_hollowDiamond_9 += "    *    \n";
expectedOutput_hollowDiamond_9 += "   * *   \n";
expectedOutput_hollowDiamond_9 += "  *   *  \n";
expectedOutput_hollowDiamond_9 += " *     * \n";
expectedOutput_hollowDiamond_9 += "*       *\n";
expectedOutput_hollowDiamond_9 += " *     * \n";
expectedOutput_hollowDiamond_9 += "  *   *  \n";
expectedOutput_hollowDiamond_9 += "   * *   \n";
expectedOutput_hollowDiamond_9 += "    *    ";

assert.deepEqual(actualOutput_hollowDiamond_9,expectedOutput_hollowDiamond_9);

let actualOutput_hollowDiamond_6 = generateDiamond("hollow",6);

let expectedOutput_hollowDiamond_6 = "";
expectedOutput_hollowDiamond_6 += "  *  \n";
expectedOutput_hollowDiamond_6 += " * * \n";
expectedOutput_hollowDiamond_6 += "*   *\n";
expectedOutput_hollowDiamond_6 += " * * \n";
expectedOutput_hollowDiamond_6 += "  *  ";

assert.deepEqual(actualOutput_hollowDiamond_6,expectedOutput_hollowDiamond_6);

let actualOutput_hollowDiamond_7 = generateDiamond("hollow",7);

let expectedOutput_hollowDiamond_7 = "";
expectedOutput_hollowDiamond_7 += "   *   \n";
expectedOutput_hollowDiamond_7 += "  * *  \n";
expectedOutput_hollowDiamond_7 += " *   * \n";
expectedOutput_hollowDiamond_7 += "*     *\n";
expectedOutput_hollowDiamond_7 += " *   * \n";
expectedOutput_hollowDiamond_7 += "  * *  \n";
expectedOutput_hollowDiamond_7 += "   *   ";

assert.deepEqual(actualOutput_hollowDiamond_7,expectedOutput_hollowDiamond_7);

//---------------------------------------------------------------------//

let actualOutput_angledDiamond_5 = generateDiamond("angled",5);

let expectedOutput_angledDiamond_5 = "";
expectedOutput_angledDiamond_5 += "  *  \n";
expectedOutput_angledDiamond_5 += " / \\ \n";
expectedOutput_angledDiamond_5 += "*   *\n";
expectedOutput_angledDiamond_5 += " \\ / \n";
expectedOutput_angledDiamond_5 += "  *  ";

assert.deepEqual(actualOutput_angledDiamond_5,expectedOutput_angledDiamond_5);

let actualOutput_angledDiamond_7 = generateDiamond("angled",7);

let expectedOutput_angledDiamond_7 = "";
expectedOutput_angledDiamond_7 += "   *   \n";
expectedOutput_angledDiamond_7 += "  / \\  \n";
expectedOutput_angledDiamond_7 += " /   \\ \n";
expectedOutput_angledDiamond_7 += "*     *\n";
expectedOutput_angledDiamond_7 += " \\   / \n";
expectedOutput_angledDiamond_7 += "  \\ /  \n";
expectedOutput_angledDiamond_7 += "   *   ";

assert.deepEqual(actualOutput_angledDiamond_7,expectedOutput_angledDiamond_7);

let actualOutput_angledDiamond_10 = generateDiamond("angled",10);

let expectedOutput_angledDiamond_10 = "";
expectedOutput_angledDiamond_10 += "    *    \n";
expectedOutput_angledDiamond_10 += "   / \\   \n";
expectedOutput_angledDiamond_10 += "  /   \\  \n";
expectedOutput_angledDiamond_10 += " /     \\ \n";
expectedOutput_angledDiamond_10 += "*       *\n";
expectedOutput_angledDiamond_10 += " \\     / \n";
expectedOutput_angledDiamond_10 += "  \\   /  \n";
expectedOutput_angledDiamond_10 += "   \\ /   \n";
expectedOutput_angledDiamond_10 += "    *    ";

assert.deepEqual(actualOutput_angledDiamond_10,expectedOutput_angledDiamond_10);

//---------------------------------------------------------------------//
