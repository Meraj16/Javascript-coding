// var arr = [1,3,2] 1st sort --> [1,2,3] ---> diffretn of current index and next index --> 2-1 = 1, 3-2 = 1 , then sum of all diff. 1 + 1 = 2
var arr = [-2,1,4,6] //-------> output 8 

var uniq = arr.sort( (a,b) => a-b)
var data = 0
for(var i = 0 ; i< uniq.length ; i++){parseInt(data)
if(arr.indexOf(arr[i+1]) !== -1){
    data += parseInt(arr[i+1]) - parseInt(arr[i])
    }
}
console.log(data)
