const countries = {
  Pakistan: "Islamabad",
  India: "New Delhi",
  China: "Beijing"
};

// console.log(Object.entries(countries)) // it print whole object
// console.log(Object.entries(countries)[1]) // it print ket and value of object

// for each loop:- for each loop array kai har element par aik aik kareke function apply karta hai

/*
Object.entries(countries).forEach(([key, value]) => {
     console.log(key + ": " + value) 
});

*/    

/*
Object.entries(countries).forEach( ([key,value])=>{
    console.log(key + ": " + value)
})

*/

/*
//simple array with for each loop
const arr=[1,2,3,4,5]
arr.forEach((elements)=>{
    console.log(elements)
});
*/

const cars= {
    car:"swift",
    brand: 2011,
    price: 50000
}

Object.entries(cars).forEach( ([keys, values]) => {
         console.log("keys: " + keys + "property: " + values)
});