const lastCharacter = function(characterAtEdge){
  if(characterAtEdge == "/"){
    return "\\";
  }
  if(characterAtEdge == "\\"){
    return "/";
  }
  return "*";
}

const repeatChar = function(character,timesToRepeat){
  let line = "";
  for(let row = 0 ;row < timesToRepeat ; row++){
    line += character;
  }
  return line;
}

const generateLine = function(firstCharacter,lastCharacter,characterToFill,lineNumber,width){
  let line = firstCharacter;
  let spaces = "";
  let timesToFill = 2 * lineNumber-3;
  line += repeatChar(characterToFill,timesToFill);
  line += lastCharacter;
  let numberOfSpaces = (width-line.length)/2;
  spaces += repeatChar(" ",numberOfSpaces);
  if(lineNumber == 1 || lineNumber == width){
    line = firstCharacter;
  }
  return spaces + line + spaces;
}

const createFilledDiamond = function(height){
  let diamond = "";
  let delimiter = "";
  for(let lineNumber = 1 ; lineNumber <= Math.ceil(height/2) ; lineNumber++){
    diamond += delimiter + generateLine("*","*","*",lineNumber,height);
    delimiter = "\n";
  }
  for(let lineNumber = Math.ceil(height/2-1) ; lineNumber > 0 ; lineNumber--){
    diamond += delimiter + generateLine("*","*","*",lineNumber,height);
  }
  return diamond;

}

const createHollowDiamond = function(height){
  let diamond = "";
  let delimiter = "";
  for(let lineNumber = 1;lineNumber <= Math.ceil(height/2) ; lineNumber++){
    diamond += delimiter + generateLine("*","*"," ",lineNumber,height);
    delimiter = "\n";
  }
  for(let lineNumber = Math.ceil(height/2-1) ; lineNumber > 0 ; lineNumber--){
    diamond += delimiter + generateLine("*","*"," ",lineNumber,height);
  }
  return diamond;
} 

const createAngledDiamond = function(height){
  let diamond = "";
  let spaces = "";
  for(let characterIndex = 1 ; characterIndex < (height/2) ; characterIndex++){
    spaces += " ";
  }
  diamond = spaces + "*" + spaces + "\n";
  for(let lineNumber = 2 ; lineNumber < height/2 ; lineNumber++){
    diamond += generateLine("/","\\"," ",lineNumber,height) + "\n";
  }
  diamond += generateLine("*","*"," ",Math.floor(height/2+1),height);
  for(let lineNumber = Math.floor(height/2) ; lineNumber > 1 ; lineNumber--){
    diamond += "\n" + generateLine("\\","/"," ",lineNumber,height);
  }
  diamond += "\n" + spaces + "*" + spaces;
  return diamond;
}

const heightToBeTaken = function(height){
  if(height%2 == 0){
    return height-1;
  }
  return height;
} 

const generateDiamond = function(type,height){
  let diamond = "";
  let delimiter = "";

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
