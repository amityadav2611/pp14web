// let str = "Bhavesh Bansal";

// for(let i =0; i < str.length;i++){  
//     console.log(str[i]);  //char traverse ho jayenge
// }

// let str = "Bhavesh Bansal";
// let ans = "";
// for(let i =0; i < str.length;i++){  
//    ans += str[i] + ", "; 
// }
// console.log(ans);  //comma and space seperated

// let str = "Bhavesh Bansal";
// for(let i =0; i < str.length;i++){  
//     console.log(str.charCodeAt(i)); //ascii value print ho jayega
// }


// let str = "jdsdhshdiehhsbcqwqjruohioabskkaoqbdhyue";
// let count = 0;
// for(let i = 0; i < str.length;i++){
//     if(str.charAt(i) == 'b'){
//         count++;
//     }
// }
// console.log(count); //koi bhi character kitne baar aaya pta kar skte hai


// let number = "12";
// console.log(parseInt(number)); //string me number ko int me convert kar denge


// let str = "59848451784"
// let ans = 0;
// for(let i = 0; i < str.length;i++){
//     ans += parseInt(str[i]);
// }
// console.log(ans); //sum all number

// let str = "59848451784"
// let ans = 0;
// for(let i = 0; i < str.length;i+=2){
//     ans += parseInt(str.substr(i,2));
// }
// console.log(ans); //sum all strings


// let str = "1A2"; //add char and number both in strings
// let ans = 0;
// for(let i =0; i < str.length; i++){
//     if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57 ){
//         ans += parseInt(str[i]);
//     }else{
//         ans += str.charCodeAt(i);
//     }
// }
// console.log(ans);

// let str = "1A2"; //add char and number both in strings
// let ans = 0;
// for(let i =0; i < str.length; i++){
//     if(!isNaN(str[i])){
//         ans += parseInt(str[i]);
//     }else{
//         ans += str.charCodeAt(i);
//     }
// }
// console.log(ans);


//reverse the strings
//let str = "Amit Yadav";
// let ans = "";
// for(let i = str.length-1; i >= 0; i-- ){
//     ans += str[i];
// }
// console.log(ans);

//reverse the strings by words
// let revstr = "";
// for(let i = str.length-1; i >= 0; i--){
//     revstr += str[i];
// }

// let sp = undefined;
// let ep = revstr.length;
// let ans = "";
// for(let i = revstr.length-1; i>=0; i--){
//     if(revstr[i] == " "){
//         sp = i + 1;
//         ans += revstr.substring(sp,ep) + " ";
//         ep = i;
//         sp = undefined;
//     }else if(i == 0){
//         sp = 0;
//         ans += revstr.substring(sp,ep);
//     }
// }
// console.log(ans);


//to check palindrome this strings
let str = "abbba";
let ans = true; //phle ham maan ke chalenge ki ye palindrome 
for(let i = 0,j = str.length-1; i <= j;i++,j--){
    if(str[i] != str[j]){
        ans = false;
        break;
    }
}
console.log(ans);







