const repeatChar = function(timesToRepeat,firstChar,middleChar,lastChar){
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
    rectangle += repeatChar(width,"*","*","*");
    delimiter = "\n";
  }
  return rectangle;
}

const createHollowRectangle = function(width,height){
  let rectangle = "";
  let delimiter = "";
  rectangle += repeatChar(width,"*","*","*") + delimiter;
  delimiter = "\n";
  for(let column = 1 ; column < height-1 ; column++){
    rectangle += delimiter;
    rectangle += repeatChar(width,"*"," ","*");
  }
  rectangle += delimiter + repeatChar(width,"*","*","*");
  return rectangle;
}

const createAlternatingRectangle = function(width,height){
  let rectangle = "";
  let delimiter = "";
  for(let column = 0 ; column < height ; column++){
    if(column%2 == 0){
      rectangle += delimiter + repeatChar(width,"*","*","*");
      delimiter = "\n";
    } else {
      rectangle += delimiter + repeatChar(width,"-","-","-");
    }
  }
  return rectangle;
}

const main = function(){
  let type = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  if(type == "filled"){
    console.log(createFilledRectangle(width,height));
  }
  if(type == "hollow"){
    console.log(createHollowRectangle(width,height));
  }
  if(type == "alternating"){
    console.log(createAlternatingRectangle(width,height));
  }
}

main();
