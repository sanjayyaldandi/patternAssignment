const repeatChar = function(character,timesToRepeat){
  let line = "";
  for(let row = 0 ;row < timesToRepeat ; row++){
    line += character;
  }
  return line;
}
exports.repeatChar = repeatChar;

const heightToBeTaken = function(height){
  if(height%2 == 0){
    return height-1;
  }
  return height;
}
exports.heightToBeTaken = heightToBeTaken;
