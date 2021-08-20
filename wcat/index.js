#!/usr/bin/envnode

const fs = require("fs");    //import
//step-1------------------------------------->
let arguments = process.argv.slice(2);   //it means 2 ke baad saare argument hme de de
//console.log(arguments);    //check krne ke liye

//step-2--------------------------------------------->
let flags = [];  //create flag type of empty array
let filenames = [];     //create filenames type ka array
let secondaryArguments = [];  //in future jyada array ki need ho gyi uske liye

//step-3----------------------------------------------->
//aur ham check krenge ki kya flags Hyphen("-") ke equal hai aur hai to flags me push krenge nhi to filesnames me krenge
for(let i of arguments){ //yha ham flags aur filenames ko segregate(alag alag) kar liya
    if(i[0] =="-"){
        flags.push(i);
    }else if(i[0] == "$"){
        secondaryArguments.push(i.slice(1));
    }
    else{
        filenames.push(i);
    }
}

//step-4--------------------------------------------------->
//ek ke baad ek dusri filenames ko view krwani hai
if(flags.length == 0 && filenames.length != 0){     //flags 0 ke equal ho aur filenames 0 ke equal na ho
    for(let file of filenames){                     //aur flags ki length 0 hai aur filenames ki length ek hai ya ek jyada hai to sari files view kra do
        console.log(fs.readFileSync(file,"utf-8")); //aur for loop me ghuma kar saari files ko ek ek krke print krwa liya
    }
}
//step-5------------------------------------------------------->esme ek flag ko chla rhe rhe the wha saare ekbaar chla diya
//  else{    //aur yha ham chahte hai ki files ke saare spaces htakar krwa ke print krwa de
//     for(let flag of flags){
//         if(flag == "-rs"){    //-rs is flags jiska mtlb hai ki remove of all spaces in files, aur flag jab -rs ke equal ho tab matlab kya koi flag -rs(hyphen rs) hai to
//             for(let file of filenames){  //files ko traverse kar liye, to files ko traverse karenge
//                 let fileData = fs.readFileSync(file,"utf-8"); //aur fileData naam ka varibale bnakar usme sare files ko store kra denge
//                 console.log(fileData.split(" ").join("")); //aur fir print kra denge, aur split.join se es fileData ke spaces ko remove kar denge
//                 //console.log(fileDataArray);
//             }
//         }
//     }
// }

//step-6------------------------------------------------------------------->
//yha ham step-5 ko optimise krenge,,,removes spaces
// for(let file of filenames){   //sbse phle ham for loop chlayenge file par
//     let fileData = fs.readFileSync(file,"utf-8");   //aur fileData naam ka varibale bnakar usme sare files ko store kra ke read kar lenge
//     for(flag of flags){                             //fir check krenge ki flag hai ya nahi isiliye flag ke upar traverse karenge
//         if(flag == "-rs"){                          //aur agar flag -rs hai to
//             fileData = fileData.split(" ").join(""); //fileData ko update kar denge jisme spaces remove ho jayenge
//         }
//     }
//     console.log(fileData);                              //aur ham fileData ko print kar liye
//}
//step-6.1---------------------------->,,removes new line
// for(let file of filenames){   //sbse phle ham for loop chlayenge file par
//     let fileData = fs.readFileSync(file,"utf-8");   //aur fileData naam ka varibale bnakar usme sare files ko store kra ke read kar lenge
//     for(flag of flags){                             //fir check krenge ki flag hai ya nahi isiliye flag ke upar traverse karenge
//         if(flag == "-rs"){                          //aur agar flag -rs hai to
//             fileData = fileData.split(" ").join(""); //fileData ko update kar denge jisme spaces remove ho jayenge
//         }
//         if(flag == "-rn"){                           //agar flag -rn hai to
//             fileData = fileData.split("\r\n").join(""); //fileData ko update kar denge jisme new line remove ho jayenge
//         }
//     }
//     console.log(fileData);
// }

//step-6.2---------------------->using function
// for(let file of filenames){   //sbse phle ham for loop chlayenge file par
//     let fileData = fs.readFileSync(file,"utf-8");   //aur fileData naam ka varibale bnakar usme sare files ko store kra ke read kar lenge
//     for(flag of flags){                             //fir check krenge ki flag hai ya nahi isiliye flag ke upar traverse karenge
//         if(flag == "-rs"){                          //aur agar flag -rs hai to
//             fileData = removalAll(fileData," "); //fileData ko update kar denge jisme spaces remove ho jayenge jiske liye hamne function ko call kiya
//         }
//         if(flag == "-rn"){                           //agar flag -rn hai to
//             fileData = removalAll(fileData,"\r\n"); //fileData ko update kar denge jisme new line remove ho jayenge jisle liye hamne function ko call kiya
//         }
//     }
//     console.log(fileData);
// }

//     function removalAll(string, removalData){       //create function and function name is removalData and pass the arguments phla string aur kya remove krna hai -->removalData
//         return string.split(removalData).join("")   //aur return kra denge string dot split by removalData dot join se
//    }

//step-6.3-------------------->,,Removes special character
// for(let file of filenames){   //sbse phle ham for loop chlayenge file par
//     let fileData = fs.readFileSync(file,"utf-8");   //aur fileData naam ka varibale bnakar usme sare files ko store kra ke read kar lenge
//     for(flag of flags){                             //fir check krenge ki flag hai ya nahi isiliye flag ke upar traverse karenge
//         if(flag == "-rs"){                          //aur agar flag -rs hai to
//             fileData = removalAll(fileData," "); //fileData ko update kar denge jisme spaces remove ho jayenge jiske liye hamne function ko call kiya
//         }
//         if(flag == "-rn"){                           //agar flag -rn hai to
//             fileData = removalAll(fileData,"\r\n"); //fileData ko update kar denge jisme new line remove ho jayenge jisle liye hamne function ko call kiya
//         }
//         if(flag == "-rsc"){                          //agar flag -rsc hai to
//             let tempString = "";         //ek temporary string empty size ki  create kar li eske baad pure ko fileData me traverse kar denge
//             for(let character of fileData){   //so ab ham check krenge ki fileData me character hai ki nahi isiliye ab character ko traverse krenge
//                 if((character.charCodeAt(0) <= 65 && character.charCodeAt(0) <= 90) || (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122));
//                 {
//                      tempString += character;  //agar upar wale charCodeAt ka character 65 se jyada aur 90 se kam ya 97 se jyada aur 122 se kam ho agar aesa hai to character ko temporary string me store kar do
//                 }
//             }
//             fileData = tempString;  //fileData me tempstring ko assign kra denge
//         }
//         console.log(fileData);
//    }
//  function removalAll(string, removalData){       //create function and function name is removalData and pass the arguments phla string aur kya remove krna hai -->removalData
//              return string.split(removalData).join("")   //aur return kra denge string dot split by removalData dot join se
// }

//step-7-------------------------------------------------------------------------------------->
for(let file of filenames) {
    let fileData = fs.readFileSync(file,"utf-8");
    for(let flag of flags) {
        if(flag == "-rs") {
            fileData = removeAll(fileData," ");
        }
        if(flag == "-rn") {
            fileData = removeAll(fileData, "\r\n")
        }
        if(flag == "-rsc") {
            for(let secondaryArgument of secondaryArguments) {
                fileData = removeAll(fileData,secondaryArgument);
            }
        }
        if(flag =="-s"){
            let Data = addSequence(fileData);
            console.log(Data);
        }
        if(flag=="-sn"){
            let Data = addSequenceTnel(fileData);
            console.log(Data);
        }
        if(flag=="-rel"){
            let ans=removeExtraLine(fileData);
            for(let i=0;i<ans.length;i++){
                console.log(ans[i]);
          
            }
        }
    }
    //console.log(fileData);
}

function removeAll(string, removalData) {
    return string.split(removalData).join("");
}

function addSequence(content){
    let contentArr= content.split("\n");
    for(let i=0;i<contentArr.length;i++){
        contentArr[i]=(i+i)+" "+contentArr[i];
    }
    return contentArr;
}

function addSequenceTnel(content){
    let contentArr= content.split("\n");
    let count=1;
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=""){
        contentArr[i]=count+" "+contentArr[i];
        count++;
        }
    }
    return contentArr;
}

function removeExtraLine(fileData){
    let contentArr=fileData.split("\n");
    let data=[];
    for(let i=1;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
            contentArr[i]=null;
        }
        if(contentArr[i]=="" && contentArr[i-1]==null){
            contentArr[i]=null;
        }
    }

    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=null){
            data.push(contentArr[i]);
        }
    }
    return data;
}





