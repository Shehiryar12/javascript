 const students=[
    {
        name:"hamza",
        id:212,
        age:30
    },
    { 
        name:"hassan",
        id:280,
        age:44
    },
    {
        name:"shah",
        id:330,
        age:33
    },
    {
        name:"ahmed",
        id:421,
        age:21
    },
    {
        name:"junaid",
        id:511,
        age:45
    }
 ]

 const data=students.filter(check);

function check(arr){
    //console.log(name);
     return arr.name === 'ahmed'
}
console.log(data)









// console.log(students)         //it print all objects

//console.log(students[0])      //it print first object

