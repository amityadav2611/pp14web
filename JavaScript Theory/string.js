/*.........................................string in js..................................................... */

//no use of double quotes and single quotes in double and single quotes

//three ways to create a string

//1 -->
// let firstName = "Amit";
// let lastName = 'Yadav';
// let age = 20;

// console.log(firstName + " " + lastName);

// let fullName = `${firstName} ${lastName}`;
// console.log(`my name is ${fullName}`)
// console.log(`my age is ${age}`);
// console.log('my age is ' + age);



//string method-------------------->

//length of string

 //let str = "Bhavesh Bansal";
// console.log(str.length);  //count the length of string using .length method

// console.log(str.slice(2,6)); //print start point se n-1 point tak. we also use of -number string in slice
// console.log(str.substring(2,6)); //aur ye -string number nhi leta

//substr
//console.log(str.substr(2,3)); //2 ko count krte hue agle 3 character print honge 

//trim method

// let str = "              bhavesh bansal           ";
// console.log(str.length);
// console.log(str.trim().length); //starting aue ending ke kitne bhi space ho use hta dega aur char ko print kar dega

//replace method

//let str ="bhavesh bansal";
//console.log(str.replace("bhavesh","manish"));  //kisi bhi char ko replace kar skte the

//upper case
//let str = "bhavesh bansal";
//console.log(str.toUpperCase()); //sabhi char ko upper kar dega

//let str2 = "BHAVESH BANSAL"
//console.log(str2.toLowerCase()); //sabhi char ko lower kar dega

//let str = "Bhavesh";
// console.log(str.charAt(1)); //1th position par koun sa char hai
// console.log(str.charCodeAt(2)); //to give skayi value

//console.log(str[0]);

// str[0] = "A"; //beacoz strings are immutable
// console.log(str);