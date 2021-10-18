// combine two array and make a new object onearray will kew and 2nd one will value  

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    // replce all white space .replace(/ /g, "")

  var key = '1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5'.replace(/ /g, "").split('');

  var obj = {};

  for ( var i=0; i < key.length; i++) {

  obj[alphabet[i]] = key[i]
  
  }

console.log(obj)
