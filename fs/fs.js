//fs.readfilesync----->esse ham kisi bhi file me kya likha hai use read kar skte hai
//fs.writefileSync---->esse ham file me kya hai likha hai use delete karke apna likh skte hai aur agar koi file exist nhi krti to apna create karke usme kuch bhi likh skte hai
//fs.existsSync()------>eska kaam yhi hai ki agar file hogi to true return krega aur nahi hogi to false return krega

//fs.readfilesync
const fs = require("fs");  //ye ek node moule hai jisme read write exits likha gya hai

// console.log(fs.readFileSync("a.txt","utf-8"));   //read synchronius file using encoding utf-8
// console.log(fs.existsSync("a.txt"));           //true 
// console.log(fs.existsSync("b.txt"));            //false


//fs.writefileSync
//  fs.writeFileSync("a.txt","How are you?");  //esse ham a.txt me jo bhi likha hua tha pahle usko delete kar dega fir ham kya likhna chahte hai wo likh denge jaise(how are you) likhe hai
//  fs.writeFileSync("b.txt","hello my name is Amit"); //esse ham ye kar skte hai ki agar koi file exist nahi krti hai ya wo file hai hi nhi to phle ham file(b.txt) create karenge aur fir jo chahte hai wo likh skte hai




//process.argv
//console.log(process.argv);
 //let file1name = process.argv[2];  //we want ki file 1 , file 2 me aa jaye

// let flag = process.argv[3];
// if(flag == "-a"){
    
// }else if(flag == "-aw"){

// }

// let file2name = process.argv[4];

// let file1data = fs.readFileSync(file1name,"utf-8");
// let file2data = fs.readFileSync(file2name,"utf-8");
// console.log(file1data + "\n" + file2data);


//console.log(process.argv[2].split(" "))