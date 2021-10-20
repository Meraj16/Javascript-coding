// If sum of digit is bellow 26 or equal to 26 then print letter accouding to that if not or abobe 26 then again add that digit and print letter accouding to that
// input --> 6442 = 6+4+4+2 = 16 = P 
// input --> 558823 = 5+5+8+8+2+3 = 31 not valide mins agaun add 3+1 = 4 = D

//  let str = '558823'.split('');
 let str = '6442'.split('');
console.log('Input ---> ',str)

  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); 

var  obj = Object.assign( {},alphabet)

var count = 0;
  str.map(
    (no) => {
      count += parseInt(no);  
    }
  )
  if(count <= 26 ){
    console.log(obj[count - 1])
  } else {
    var string = count.toString().split('');
    var newCount = 0;
    string.map( no => {
      newCount += parseInt(no)
    })
    console.log(obj[newCount - 1])
    // console.log('2nd  count when above 26',newCount)

  }

// console.log('first count when bellow 26',count)
