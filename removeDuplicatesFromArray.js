
var array = [1,1,3,3,2]

// method 1

// uniq = [...new Set(array)];
// console.log(uniq)

// method 2

var uniq = array.filter(function(item, pos) {
    return array.indexOf(item) == pos;
})

console.log(uniq)


// Output  = [1,3,2]



//FULL explanation 

// var arr = [5,6,5,3,8,2,8,6]

// var uniq = arr.filter(function(item, pos) {
    
//     console.log('before-------> ','Number-',item, 'index',pos)
//     if(arr.indexOf(item) == pos){
    
//     console.log('yes','Number-',item,'==', 'index',pos)
        
//         return item
//     } else {
//         console.log('no ','Number-',item, 'index',arr.indexOf(item))
//     }
    
// })

// console.log(uniq)
