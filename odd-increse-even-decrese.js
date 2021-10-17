// input [8, 4, 7 ,10, 3, 5, 6, 12, 8] output [ 7, 5,  3,  4, 6, 8, 10, 12]

var array = [8, 4, 7 ,10, 3, 5, 6, 12, 8]

console.log('input',array)

console.log('outpot --->',
  array
  .filter((v, i) => v % 2 )
  .sort((a, b) => b - a)
  .concat( array
    .filter((v, i) => v % 2 ==0 )
    .sort((a, b) => a - b))
    .filter(function(item, pos, ary) {
      return !pos || item != ary[pos - 1];
  })
  )
