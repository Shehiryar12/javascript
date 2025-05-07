 /*
 let arr=[1,2,3,4,5]
 for (const num of arr) {
    console.log(num)
 }

 let str="hello"
 for (const one of str) {
    console.log(one)
 }
*/

//map() store value pairs
//key can be any datatype(object,function,primitive datatype)
//insertion order means key value pair are returned in the same order they were added to the map()
//insertion order means key value pair are return in the same order they were added to the map
//key ko number ya strig bhi lai saktay hai

//in a map you cannot the same key twice and expect it to be stored twice
//mapdoesnot allow duplicate key


//map:-
//map.set() is used to add key value pair()
const map=new Map();
map.set("In","india")             // (key,value)
map.set("Pakistan","pakistan")
map.set("Fr","france")
map.set("In","india")             // (key,value)
console.log(map)

map.set("In","delhi")            //change value
console.log(map)

for (const [key,value] of map) {
    console.log(key,":-",value)              
}

//[] use brackets to print key and value

//using object:-

/*
const myObject={
    "games1":-"spiderman",
    "games":-"batman" 
}
*/


















 //yaha arr par loop laga raha ho kisi par bhi loop laga sakta hao not only object
  //yaha string par loop laga raha ho kisi par bhi loop laga sakta hao not only object