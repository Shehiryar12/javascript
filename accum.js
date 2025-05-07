 //reduce() array kai tamam elements ko aik hi value mai combine karta hai
 //currvalue array se value le ga.
 //return function sai value nikalta hai
 //after completing all iteration it return the final result

 /*
 const myNums=[1,2,3]
 const mytotal=myNums.reduce(function (accum,currvalue){
    return accum + currvalue
 },0)
 console.log(mytotal)
*/
 //first iteration:  0+1=1
 //second iteration: 1+2=3
 //third iteration:  3+3=6
 

/* 
const myNums=[1,2,3]
const mytotal=myNums.reduce(function (accum,currvalue){
   console.log("acc "+ accum + " and current value is " + currvalue)
    return accum + currvalue
},0)
console.log(mytotal)
*/

/*
//use arrow function:-
const number=[1,2,3,4,5];
const sum=number.reduce((accum,currvalue)=>accum+currvalue,3)
console.log(sum)
*/

const shoppingCart=[
    {
        itemname:"js course",
        price:500
    },
    { 
        itemname:"python course",
        price:700
    },
    {
        itemname:"ruby course",
        price:300  
    }
]
const price=shoppingCart.reduce((accu,item)=> accu + item.price,0)
console.log(price)

//item har object ko donote kar raha hai
