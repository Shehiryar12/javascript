/*
const products = [
  { name: "Laptop", price: 120000 },
  { name: "Mouse", price: 2000 },
  { name: "Keyboard", price: 3500 },
  { name: "Monitor", price: 45000 }
];


// Aapko filter() ka use karke sirf woh products chahiyein jin ki price 10,000 se kam hai.

const productstwo=products.filter(names);
function names(arrays){
    //  console.log(arrays)
    return arrays.price<10000
}
console.log(productstwo);

*/

const tasks = [
  { title: "Buy groceries", completed: true },
  { title: "Do laundry", completed: false },
  { title: "Pay bills", completed: false },
  { title: "Read book", completed: true }
];



// Aapko filter() ka use karke sirf woh tasks chahiyein jo abhi tak complete nahi hue (i.e. completed: false).

const notcomplete=tasks.filter(info);
///,jncjncdjnvdjnvjnvjdnv

function info(not){
    //  console.log(not.completed)
    return not.completed === false
}
 console.log(notcomplete)