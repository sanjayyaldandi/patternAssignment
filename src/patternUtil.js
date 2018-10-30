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

const repeatCharForRectangle = function(timesToRepeat,firstChar,middleChar,lastChar){

  if(timesToRepeat == 1){
    let line = "*";
    return line;
  }

  let line = "" + firstChar; 
  for(let row = 1 ; row < timesToRepeat-1 ; row++){
    line += middleChar;
  }
  line += lastChar;
  return line;
}

module.exports = { repeatChar , heightToBeTaken , repeatSpacedChars ,repeatCharForRectangle }
