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
