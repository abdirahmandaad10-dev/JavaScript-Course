// // Two types of creating arrays

// // let fruits = ["Apple", "Banana", "Orange"];
// // let numbers = new Array(1, 2, 3, 4);

// // accessing and modifying elements

// // console.log(fruits[1]);

// // modifying

// // fruits[1] = "moos";
// // console.log(fruits);

// // array methods

// // method one push qeybta gadaale ayay wax uga dartaa
// // fruits.push("cinab");

// // method two pop qeybta gadaale ayay wax ka saartaa
// // fruits.pop();

// // method three shift qeybta hore ayay wax ka saartaa
// // fruits.shift();

// // method four unshift qeybta hore ayay wax uga dartaa
// // fruits.unshift("cananaas");

// // console.log(fruits);

// // modify and remove

// let xarfo = ["a", "b", "c", "d"];

// // splice

// let xarfoLasaaray = xarfo.splice(2, 3);

// // console.log("la saaray", xarfoLasaaray);

// // console.log("xarfo", xarfo);

// // slice waxaa loo istcmaalaa in aad hesho xogta qeyb ka mid ah adigoon waxba ka badalin

// let portion = xarfo.slice(0,3,);
// console.log(portion);


// iteration methods: forEach, map, filter, reduce

// let numbers = [1,2,3,4,5,6,7,8]

// forEach

// numbers.forEach(num=>{
//     console.log(num*2)
// })

// map waxuu soo celiyaa new array

// let newNumbers = numbers.map(num=>num)
// console.log(newNumbers)


// filter 

// let evenNumbers = numbers.filter(num=>num%2==0)
// console.log(evenNumbers)

// let oddNumbers = numbers.filter(num=>num%2!=0)
// console.log(oddNumbers)

// reduce

// let numbers = [1,2,3,4]

// const sum = numbers.reduce((acc,num)=>{
//     return acc+num
// },0)

// console.log(sum)

// searhing: includes, find, indexOf

let fruits = ["moos", "cinab", "qare", "murcud"]

// find

let newFruits = fruits.find(fruits => fruits.length===5)
// console.log(newFruits)

// indexOf
console.log(fruits.indexOf("qare"))

// include

console.log(fruits.includes("murcud"))