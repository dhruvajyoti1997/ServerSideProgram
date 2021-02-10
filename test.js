/*var sum =0;

for (var i=1; i<= 3; i++)
{
    sum = sum+(i*i)
}
console.log(sum)
var sumN = (3* (3+1))/2
var sqaureSum = sumN*sumN;

console.log(sqaureSum)

var diffsum = Math.abs(sqaureSum - sum)

console.log(diffsum) */

/*var sum=0;
for( var i= 0; i<= 1000; i++)
{
  if( i%3 ===0 || i%5 ===0)
  {
    sum+=i;
  }
}
console.log(sum) */

const express= require('express')
const app= express()
const port =8818


app.get('/hi', (req, res) =>{
    res.render('Hi Welcome')
})

app.get('/hello', (req,res) =>{
    res.render('Hello Buddy')
})
app.get('/' , (req,res)=>{
    res.status(404).send('page not found')
})

app.listen(port, () =>
console.info(`App listening on port: ${port}`)
)