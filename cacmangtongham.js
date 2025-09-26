//bài 1
//let mycolor  =["red","green","blue","yellow"];
//let reusult = mycolor.join(",");
//console.log(reusult);


//bài 2

//function mua(str){
//  let result = str[0];
//for (let i = 1; i < str.length; i++) {
//  let prev = parseInt(str[i - 1]);
//let current = parseInt(str[i]);
//if (prev % 2 === 0 && current % 2 === 0) {
//  result += "-" + current;
//}else {
//  result += current;
//}
//}
//return result;
//}
//let input = "025468";
//let ourput = mua(input);
//onsole.log(ourput);


//bài 3

function hoa(str){
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            result = result + char.toUpperCase();
        } else {
            result = rsult + char.toUpperCase();
        }
    }
    return result;
}
let input = "The Quick Brown Fox";
let output = swapCase(input);
console.log(output);