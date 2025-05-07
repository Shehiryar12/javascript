/* 
1) map() are used to store key value pairs
2) key can be any datatype like primitive(string,number,array)
3) insertion keys mean map keeps each key in the same order where we added them
4)insertion key means map keep each key in same order where we added them   

5)map.set() is used to add element in map object
*/


const map=new Map();
map.set("In","india")       //(key,value)
map.set("Fr","france")
map.set("Pak","pakistan")
console.log('Map original value',map)

map.set("In","uk")
console.log("change original value:", map)     //change value
//now user print key and value seperatly using []
for (const [key,value] of map) {
    console.log(key,":-",value)
}
