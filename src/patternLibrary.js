const repeatChar = function(character,height) {
  let line = "";
  for (let row = 1; row <= height; row++) {
    line += character;
  }
  return line;
}

const repeatSpacedChars = function(height, firstChar, middleChar, lastChar) {
  let line = firstChar;
  for (let row = 1; row <= height - 2; row++) {
    line += middleChar;
  }
  line += lastChar;
  if (height == 1) {
    line = "*";
  }
  return line;
}

const upperHalfDiamond = function(height, firstChar, middleChar, lastChar) {
  let diamond = "";
  let delimiter = "";
  for (let row = 1; row <= Math.ceil(height / 2); row++) {
    let count = 2 * row - 1;
    let spaces = repeatChar(" ",(height - count) / 2);
    diamond += delimiter + spaces + repeatSpacedChars(count, firstChar, middleChar, lastChar) + spaces;
    delimiter = "\n";
  }
  return diamond;
}

const lowerHalfDiamond = function(height, firstChar, middleChar, lastChar) {
  let diamond = "";
  let delimiter = "\n";
  for (let row = Math.ceil(height / 2) - 1; row > 0; row--) {
    let count = 2 * row - 1;
    let spaces = repeatChar(" ",(height - count) / 2);
    diamond += delimiter + spaces + repeatSpacedChars(count, firstChar, middleChar, lastChar) + spaces;
  }
  return diamond;
}

const createFilledDiamond = function(height) {
  let diamond = "";
  diamond += upperHalfDiamond(height, "*", "*", "*");
  diamond += lowerHalfDiamond(height, "*", "*", "*");
  return diamond;
}

const createHollowDiamond = function(height) {
  let diamond = "";
  diamond += upperHalfDiamond(height, "*", " ", "*");
  diamond += lowerHalfDiamond(height, "*", " ", "*");
  return diamond;
}

const createAngledDiamond = function(height) {
  let diamond = "";
  for (let row = 1; row < Math.ceil(height / 2); row++) {
    count = 2 * row - 1;
    spaces = repeatChar(" ",(height - count) / 2);
    diamond += spaces + repeatSpacedChars(count, "/", " ", "\\") + spaces + "\n";
  }
  diamond += repeatSpacedChars(height, "*", " ", "*");
  diamond += lowerHalfDiamond(height, "\\", " ", "/");
  return diamond;
}

const heightToBeTaken = function(height){
  if(height%2 == 0){
    return height-1;
  }
  return height;
}

const generateDiamond = function(type,height){

  height = heightToBeTaken(height);

  if(type == "filled"){
    return createFilledDiamond(height);
  }
  if(type == "hollow"){
    return createHollowDiamond(height);
  }
  if(type == "angled"){
    return createAngledDiamond(height);
  }
}

const repeatCharForRectangle = function(timesToRepeat,firstChar,middleChar,lastChar){
  let line = "" + firstChar; 
  for(let row = 1 ; row < timesToRepeat-1 ; row++){
    line += middleChar;
  }
  line += lastChar;
  return line;
}

const createFilledRectangle = function(width,height){
  let rectangle = "";
  let delimiter = "";
  for(let column = 0 ; column < height ; column++){
    rectangle += delimiter;
    rectangle += repeatCharForRectangle(width,"*","*","*");
    delimiter = "\n";
  }
  return rectangle;
}

const createHollowRectangle = function(width,height){
  let rectangle = "";
  let delimiter = "";
  rectangle += repeatCharForRectangle(width,"*","*","*") + delimiter;
  delimiter = "\n";
  for(let column = 1 ; column < height-1 ; column++){
    rectangle += delimiter;
    rectangle += repeatCharForRectangle(width,"*"," ","*");
  }
  rectangle += delimiter + repeatCharForRectangle(width,"*","*","*");
  return rectangle;
}

const createAlternatingRectangle = function(width,height){
  let rectangle = "";
  let delimiter = "";
  for(let column = 0 ; column < height ; column++){
    if(column%2 == 0){
      rectangle += delimiter + repeatCharForRectangle(width,"*","*","*");
      delimiter = "\n";
    } else {
      rectangle += delimiter + repeatCharForRectangle(width,"-","-","-");
    }
  }
  return rectangle;
}

const generateRectangle = function(type,width,height){
  if(type == "filled"){
    return createFilledRectangle(width,height);
  }
  if(type == "hollow"){
    return createHollowRectangle(width,height);
  }
  if(type == "alternating"){
    return createAlternatingRectangle(width,height);
  }
}

const leftTriangle = function(height){
  let triangle = "";
  let delimiter = "";
  for(let column = 1 ; column <= height ; column++){
    triangle += delimiter + repeatChar("*",column);
    delimiter = "\n";
  }
  return triangle;
}

const rightTriangle = function(height){
  let delimiter = "";
  let spaceLine = "";
  let triangle = "";
  let line = "";
  for(let gap = 1 ; gap <= height ; gap++){
    spaceLine += repeatChar(" ",(height-gap));
    line += repeatChar("*",gap);
    triangle += delimiter + spaceLine + line;
    spaceLine = "";
    line = "";
    delimiter = "\n";
  }
  return triangle;
}

const generateTriangle = function(type,height){
  if(type == "left"){
    return leftTriangle(height);
  }
  if(type == "right"){
    return rightTriangle(height);;
  }
}

exports.generateTriangle = generateTriangle;
exports.generateRectangle = generateRectangle;
exports.generateDiamond = generateDiamond;
