//  Find All Numbers in String Oprations
// input  --> 9q8i10o
// output ---> q q q q q q q q q i i i i i i i i o o o o o o o o o o
// input  --> 9q8i1o
// output ---> q q q q q q q q q i i i i i i i i o 

const replaceMe = "9q8i10o"
// const replaceMe = "9q8i1o"
// const replaceMe = "90q8i10o"  

var str =  replaceMe.split('');

var newStr = []

for (var i= 0; i< str.length; i++){

  if(!isNaN(str[i])){

    if(!isNaN(str[i+1])){

      len = parseInt(str[i] + str[i+1])

      for(var j = 0; j < len; j++){

        newStr.push(str[i+2])
      }
      
    }else{

      for(var j = 0; j < str[i]; j++){

        newStr.push(str[i+1])
      }
    } 
  }
}

console.log(...newStr)  // log in same line 
// console.log(newStr.join(" "))  ---> join with space in same line same as ...
// newStr.map( n => console.log(n))  --> log in diffrent line
