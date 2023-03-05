console.log(Math)

Math.round(7.7);  // .floor, .ceil, .random

function floor(x){
  a,b = x.split(".");
  if(b > 5) return Math.round(x) -1
  else return Math.round(x);
}

// fusiom
Math.round(Math.random()*5);
