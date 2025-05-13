let ages = [18, 21, 16, 25, 14, 30];
const numbers=ages.filter(num);

function num(arr){
    return arr >= 18
}
console.log(numbers);