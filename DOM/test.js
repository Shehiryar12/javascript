 const arrays=[

    {
           name:"ali",
           id:205,
           age:15
    },

    {
          name:"ahmed",
          id:210,
          age:20
    },

    {
          name:"razim",
          id:220,
          age:25
    },

    {
         name:"asad",
         id:231,
         age:29
    },

    {
         name:"raza",
         id:245,
         age:33
    }
 ]

 //console.log(arrays)jnjjjnnjnj

const data=arrays.filter(functionName);
function functionName(arr){
    // return arrays.name
    // console.log(arr.name)



    
    return arr.name != 'asad'
}

console.log('data',data);

