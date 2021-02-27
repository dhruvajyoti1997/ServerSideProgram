var arguments= process.argv;
const addthese = arguments.slice(2, arguments.length);
let sum = 0;
let solution = addthese.forEach((value) => {
    sum += Number(value);
    return sum
});
console.log(sum)
// var calculateSum= function(){
//     var sum=0;
// for (i = 2; i <= 2000000; i++)         
//        { 		  	  
//           var counter=0; 	  
//           for(num =i; num>=1; num--)
// 	  {
//              if(i%num==0)
// 	     {
//  		counter = counter + 1;
// 	     }
// 	  }
// 	  if (counter ==2)
// 	  {
// 	     //Appended the Prime number to the String
// 	     sum=sum+i;
//       }
      
//     }
//     return sum;
// }
//     console.log(calculateSum());
//Palindrome 
var arr=[]
function largestpalindrome(){
  for(var i= 999 ; i>100; i--){
    for(var j = 999;j >100;j--){
      var mul = j*i;
      if(isPalin(mul)){
       //return i*j
       arr.push(j*i)
      }
    }
  }
  return Math.max.apply(Math,arr)
}

function isPalin(i){
  return i.toString() == i.toString().split("").reverse().join("")
}
console.log(largestpalindrome())
// Ends
//Timers Starts

var interval =setInterval(function(){
    console.log("TCS")
  },2000)
  
  setTimeout(function(){
    clearInterval(interval)
  },10000)

  //Timers ends
  //2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

  function getSmallestDivisor(n){
    var i = n;
  
    // if not 0 then i++
    function checkI(i){
      for (var j = 1; j <= n; j++) {
        // loop 20 % i   where i goes from 1 to 20  must % = 0
        if( i % j !== 0 ){ return false; }
      };
      return true;
    }
    // break loop when n all are 0
    while( !(checkI(i)) ){ i+=n; }
    return i;
  }

  //Create a readible stream
  var fs = require('fs')

  var creatReadstream = fs.createReadStream('input.txt')
var data = '';
creatReadstream.setEncoding('UTF8')
creatReadstream.on('data', function(chunk){
  data+= chunk
})

creatReadstream.on('end', function(){
  console.log(data)
})