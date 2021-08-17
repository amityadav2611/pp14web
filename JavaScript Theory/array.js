//how to create
//let arr = []; // 1st method to array created in js

//let arr = new Array(); //2nd method to array created in js

//console.log(arr);

//note --> arrays is mutable

//let arr = ["bhavesh", 23, 45.4, true, 'b'];
//console.log(arr);

 //arr.push("hello"); //esse ham array ke last index me add kar skte hai
 //console.log(arr);
 //arr.pop();     //esse ham array ke last index se remove kar skte hai
 //console.log(arr);
//console.log(arr.length); //esse ham arrays ka length jaan skte hai ki array me kitne length hai

// let arr = [];
// arr[25] = 5;
// console.log(arr[25]);

//convert string to array
// let str1 = "Bhavesh";
// let str2 = "Bhavesh Bansal";
// let str3 = "Apple,Mango,Banana";
// console.log(str1.split(""));
// console.log(str2.split(" "));
// console.log(str3.split(","));

//conver array to string
// let arr = ["a","b","c","d"];

// console.log(arr.join(""));
// console.log(arr.join("#"));
// console.log(arr.join("|"));

//merging of two array
// let arr1 = ["a","b","c"];
// let arr2 = ["d","e","f"];
// console.log(arr1.concat(arr2));


// let arr = [1,2,3,4,5,6];

// for(let i = 0; i < arr.length; i++){
//     console.log(i);
// }

//traverse and get the value

// for(let i of arr){  //i array ke ith value ko store krega
//     console.log(i);

// }

//how to do string concatenation
// console.log("a" + 1 + 2); //string concatenation

// console.group(1 + 2 + "a"); // first integer addition then string concatenation

//console.log(String.fromCharCode("a".charCodeAt(0) + 1)); //add string  b c d .....z


//most important methods of array

// const arr = [1,2,3,4,5,6];
// console.log(arr);
// arr[3] = 7; //internal reAS
//arr = [1,2,3]
// console.log(arr);

//let arr = ["a","b","c","d"];

// arr.forEach(function(value,index,array){
//     console.log(value,index,array);
// })

// //if we want to change array element
// arr.forEach(function(value,index,array){
    
// })


//how to pass own argument
// function temp (myarg,myarg2,myarg3,data){
//     console.log(myarg,myarg2,myarg3,data);
// }
// arr.forEach(temp.bind(this,"hello","hello2","hello3"));

//write own forEach function using callBackFn
// function myForEach(array,callBackFn){
//     for(let i = 0; i < array.length; i++){
//         callBackFn(array[i], i, array);
//     }
// }
// let arr = [1,2,3,4];
// function call(value,index,array)
// myForEach(arr,function(value,index,array){
//     console.log(value,index,array);
// })

//how to delete or remove in array
// let arr = [1,2,3,4];
//arr.splice(1,3);  //this method is deleted in original array. 1 se 3 tak ke element ko delete kar dega
//console.log(arr.splice(1,2)); // 1 se 2 tak ke kaat ke return bhi kar skta hai

// console.log(arr.slice(1,3)); //1 se 3 tak ke array ko kaat ke le aayega aur hme return kar dega
//note -> splice orginal ko delete kar dega par slice original array ko delete nhi krta

//question-->delete odd number
// let arr = [1,2,3,3,5,4,5,6,7,8,9];
// for(let i = 0;i >= 0; i--){
//     if(arr[i] % 2 == 1){
//         arr.splice(i,1);
//     }
//     //let temparr = [...arr]; //copy in array
// }
// console.log(arr);


//map() function -> kisi bhi array ke element ko apne anusaar koi integer add jrna chahte hai to eske through kar skte hai. 
// let arr = [1,2,3,4];
// for(let i = 0;i < arr.length;i++){
//     arr[i] += 2;
// }

//aur agar fir se add kiye hue me add krna ho to
// let newarr = arr.map(function(value){
//     return value + 2;
// });
// console.log(newarr);

 //ya phir
// arr = arr.map(function(value){
//     return value + 2;
// });
// console.log(arr);

//filter ->apne hisab kuch htana ho array me se tab ham filter ka use krte hai
// let arr = [1,2,3,3,5,4,5,6,7,8,9];
// arr = arr.filter(function(value){
    // if(value % 2 == 1){
    //     return false;
    // }else{
    //     return true;
    // }
//     return value % 2 == 0;
// })
// console.log(arr);

//array sort() -> ye 
//let arr = [2,5,5,3,4,1];
//console.log(arr.sort()); //sort in ascending order
// console.log(arr.sort(function(a,b){
//     //console.log(a,b);
//     //return a-b; //it means a bda hai b se to ye true bol rha hu to ascending order me print hoga
//     //return b-a; ////it means b bda hai a se to ye false bol rha hu to descending order me print hoga
//     if(a>b){
//         return 1;
//     }else if(a == b){
//         return 0;
//     }else{
//         return -1;
//     }
// }));


//console.log(arr.sort());
//char by char sort so 50 phle aayega 6 se
// let nums = [3,2,6,50,10];
// console.log(nums.sort());

//array.include() -> exist krega array ke element me to true na krega to false
// let arr = [1,2,3,3,5,4,5,6,7,8,9];
// console.log(arr.includes(6)); 

