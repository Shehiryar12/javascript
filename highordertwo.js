 /*
 const myObject={                                           //this create an object objectname myObject
    "js": "javascript",
    "cpp": "c++"                                           //key:value
 }

 for (const key in myObject) {                         //key is variable name
  // console.log(key)                                    //it print the property name
  console.log(key + " " + "stands for " + myObject[key]) 

}

*/

/*
const lang={
    "js":"javascript",
    "cpp":"c++"
}
for (const key in lang) {
     console.log(key + ":" + lang[key])   //[] is used to access the value of key
}
*/

const games=["cricket","football","spidermen","carrace"]
for (const key in games) {
   // console.log(key)
    console.log(games[key])         //[] it print the key values of arrays
}