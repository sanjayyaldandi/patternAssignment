const generateTriangle = require("./src/patternLibrary.js").generateTriangle;

const main = function(){
  let type = process.argv[2];
  let height = +process.argv[3];
  console.log(generateTriangle(type,height));
}

main();
