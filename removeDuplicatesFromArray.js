
var array = [1,1,3,3,2]

// method 1

// uniq = [...new Set(array)];
// console.log(uniq)

// method 2

var uniq = array.filter(function(item, pos) {
    return array.indexOf(item) == pos;
})

console.log(uniq)
