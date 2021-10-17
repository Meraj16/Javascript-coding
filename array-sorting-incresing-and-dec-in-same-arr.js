//in this qustion [4,3,2,2,1] will an input and output shoud be 3 2
var newArr = []

  var arr = [4,3,2,2,1];
  console.log('Input ->',arr) 
  if(arr.length > 2 ){
  arr.shift()
  var max = Math.max.apply(null, arr);
  newArr.push(max) 
  arr.splice(arr.indexOf(max), 1); 
  var max2 = Math.max.apply(null, arr); 
  newArr.push(max2)

  } else {
    arr.shift()
  var max = Math.max.apply(null, arr);
  newArr.push(max)
  }
console.log(...newArr)
