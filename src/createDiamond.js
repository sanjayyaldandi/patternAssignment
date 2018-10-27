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

const heightToBeTaken = function(height){
  if(height%2 == 0){
    return height-1;
  }
  return height;
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

const generateDiamond = function(type,height){
  let diamond = "";
  let delimiter = "";

  if(type == "filled"){
    diamond = createFilledDiamond(height);
  }
  if(type == "hollow"){
    diamond = createHollowDiamond(height)
  }
  if(type == "angled"){
    diamond = createAngledDiamond(height);
  }
  return diamond;
}

const main = function(){
  let type = process.argv[2];
  let height = heightToBeTaken(+process.argv[3]);
  console.log(generateDiamond(type,height));
}
main();
