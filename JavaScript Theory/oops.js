//create object
// let obj = {"key" : "value" }; //object created

// //example
// let person = {
//     name : "Bhavesh",
//     age  : 23,
//     0 : "hello"
// }
//console.log(person["name"])
// console.log(person.name)
// console.log(person.age)
// console.log(person[0])
// console.log(person);
// person["company"] = "pepcoding";
// person.gender = "male";
// console.log(person);

// let arr = [1,2,3,4];
// let obj = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4
// }

// arr["name"] = "Bhavesh";
// console.log(arr.name);
// console.log(arr.length);

// console.log(Array.prototype.map)
// Array.prototype.name = "Bhavesh";
// String.prototype.len = function() {
//     console.log(this.length);
// }
// // let arr = [1,2,3,4];
// // console.log(arr.name);
// let str = "bhavesh bansal";
// str.len();

// arr["name"] = "Bhavesh";
// console.log(arr["name"])
// console.log(arr.length);

//object ke andar object -> nested object
// let obj ={
//     obj2 : {
//         "hello" : "1"
//     }
// }
// console.log(obj.obj2.hello)


// let obj = {
//     "hello": function() {
//         console.log("hello");
//     }
// }

// obj.hello();

//array in objects----------->

// let obj = {
//     1 : "hello1",
//     2 : "hello2"
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

//first traversing method------------------>
// for(let key in obj) {
//     console.log(obj[key]);
// }

//iterating the object-->second traversing method--------------->
// for(let i = 0; i < Object.keys(obj).length; i++) {
//     console.log(obj[Object.keys(obj)[i]]);
// }


//nested object-------->
// let obj = {
//     obj1 : {
//         "obj1.1" : { "obj1.1.1" : "hello1"}
//     },
//     obj2: {
//         "obj2.1" : "hello2.1",
//         "obj2.2" : "helo2.2"
//     }
// }

// for(let key in obj) {
//     console.log(key);
//     if(typeof(obj[key]) == "object") {     //agar key ka type object hai to
//         for(let key2 in obj[key]) {
//             console.log(key2);
//         }
//     }
// }

//generalise using recursion--------------->
// function printKeys(obj) {
//     for(let key in obj) {     //faith->lavel-1
//         console.log(key);
//         if(typeof(obj[key]) == "object") {       //lavel-2
//             printKeys(obj[key]);
//         }
//     }
// }
// printKeys(obj);



//flatten object  & Deep copy------------------------->
// let obj = {
//     "hello1" : {},
//     "hello2" : 2
// }

// let newobj = {...obj};
// newobj.hello1["hello1.1"] = "bhavesh";

// console.log(obj);
// let newObj = {};
// for(let key in obj) {
//     if(typeof(obj[key]) == "object") {
//         newObj[key] = {};
//     } else {
//         newObj[key] = obj[key]
//     }
// }