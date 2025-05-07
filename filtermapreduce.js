 /*
 const coding=["js","ruby","c++","python","sql","html"]
 coding.forEach((item)=>{
      console.log(item)
 })
*/


/*
//filter array method hai isme sirf wohi element hotay hai jo di hui condition ko satisfy kare 
const numone=[1,2,3,4,5,6,7,8,9] 
let numone=num.filter( (num)=> num>5 )
*/

/*
//when use curly braces must used return keyword otherwise the function return undefined
let numtwo=num.filter( (num)=> {
    return num>6 
})
console.log(numtwo)
*/

/*
const numone=[1,2,3,4,5,6,7,8,9] 
const myNums=[] 

numone.forEach((num)=>{
    if (num>5) {
           myNums.push(num)
    }
})
console.log(myNums)
*/

/*
const books=[
    {title:"one", genre:"science",publish:2009},
    {title:"two", genre:"computer",publish:2010},
    {title:"three", genre:"history",publish:2011},
    {title:"four", genre:"math",publish:2012},
    {title:"five", genre:"geography",publish:2013}
]

//const userbooks=books.filter( (bk) =>bk.genre==="history")         
//console.log(userbooks)

//let userbook=books.filter((bk)=>bk.genre==="science")
//console.log(userbook)

const usertwobook=books.filter((bk)=>{return bk.publish >= 2011 } )
console.log(usertwobook)
*/

//-------------------------------------------------------------------------------------------------
/*
const MyNum=[1,2,3,4,5,6,7,8,9,10]
const newNums= MyNum.map( (num) => num+10)
console.log(newNums)
*/

//------------------------------------------------------------------------------------------------

//agar ap two or three method ko aik saath use kartay hai toh isko chaining kehtay hai
const newNums=[1,2,3,4,5,6,7,8,9]
const newNumber=newNums
.map( (num)=>num*10 )        //output(10,20,30,40,50,60,70,80,90)
.map( (num)=>num + 1 )       //output(11,21,31,41,51,61,71,81,91)
.filter((num)=> num>=40)     //output(41,51,61,71,81,91)
console.log(newNumber)