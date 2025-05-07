/*
const coding=["js","ruby","c++","html"]
coding.forEach(function (val){
   console.log(val)
}
)
*/

/*
  for each array element hai jo har element par aik aik kar kay function apply kare ga
  pehly js,phir ruby,c++,html etc
*/

/*
const code=["css","sql","python","react"]
code.forEach( (program) =>{
    console.log(program)
} )
*/    

//for each array method hai jo har element par aik aik kar kay function apply kare ga
//call back function ka name hobhi sakta hai aur nahi bhi

/*
function printMe(){
      console.log(printMe)
}
coding.forEach(printMe)
*/


//arrow function is a shorter way to write a function
/*
const team=["lahore","islamabad","pindi","peshawar","faislabad"]
team.forEach((item,index,array) => {                      //here we check item index and array 
          console.log(item,index,array)
 })

*/
 const myCoding=[
    {
        languagename:"javascript",                  //objects
        filename:"js"
    },

    {
        languagename:"c++",
        filename:"cpp"
    },

    {
        languagename:"python",
        filename:"py"
    },
 ]
 myCoding.forEach( (program)=>{
    console.log(program.languagename)
    console.log(program.filename)
 } )









