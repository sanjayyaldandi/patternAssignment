const repeatChar = function(timesToRepeat,character){
  let line = "";
  for(let index = 0 ; index < timesToRepeat ; index++){
    line += character;
  }
  return line;
}

const leftTriangle = function(height){
  let triangle = "";
  let delimiter = "";
  for(let column = 1 ; column <= height ; column++){
    triangle += delimiter + repeatChar(column,"*");
    delimiter = "\n";
  }
  return triangle;
}

const rightTriangle = function(height){
  let delimiter = "";
  let spaceLine = "";
  let triangle = "";
  let line = "";
  for(let gap=1;gap<=height;gap++){
    spaceLine += repeatChar((height-gap)," ");
    line += repeatChar(gap,"*");
    triangle += delimiter + spaceLine + line;
    spaceLine = "";
    line = "";
    delimiter = "\n";
  }
  return triangle;
}

const main = function(){
  let type = process.argv[2];
  let height = +process.argv[3];

  if(type == "left"){
    let result = leftTriangle(height);
    console.log(result);
  }
  if(type == "right"){
    let result = rightTriangle(height);
    console.log(result);
  }
}

main();
