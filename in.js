// tam giác vuông ở góc bên phải
//let n = parseInt(prompt("Nhập n số hàng:")) || 5;
//let i = 1;
//let s = "";

//while (i <= n) {
   // let j = 1;
   // while (j <= i) {
      //  s += "*";
     //   j++;
 //   }
  //  s += "\n";
   // i++;
//}

//document.getElementById("out").textContent = s;

//Tam giác phải dưới
//let n =parseInt(prompt("nhập n số hàng"));
//let i = 1;
//let s = '';
//while (i <= n) {
  //  let k = 0
    //while (k < n - i) {s +=" ";k++;}
    //let j = 0;
    //while (j < i){ s +="*";j++}
    //s +="\n";
    //i++;
//}
//document.getElementById('out').innerHTML = s;

//tam giác vuông góc trái trên
//let n = parseInt(prompt("nhập số hàng n"));
//let i = n;
//let s = "";
//while (i >= 1){
  //  let j = 1;
    //while (j <= i ){
      //  s += "*";
        //j++;
    //}
    //s +="\n";
    //i--;
//}
//document.getElementById("out").textContent = s;

// tam giác vuông góc trên phải
let n= parseInt(prompt("nhập giá trị n "));
let i = n;
let s="";
while (i >= 1){
let k = 0;
while (k <= n - i){
    s += " ";
    k++ ; }
    let j = 0;
    while (j < i){
        s += "*";
        j++;}
    s += "\n";
    i--;
}
document.getElementById("out").textContent = s;