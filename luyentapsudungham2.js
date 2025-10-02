//bài 1
//function binhphuong() {
//  let a = parseInt(prompt("nhập số a"))
   // let result = a*a;
    //document.write("Bình phương của " + a + " là " + result);
      //  return result;
//}
//binhphuong();



//bài 2
//function tron() {

//let r = parseInt(prompt("Nhập bán kính " ))
//let s = Math.PI*r*r;
//let c = 2*Math.PI*r;
//document.write("Diện tích hình tròn là : " + s + "<br>" );
//document.write("Chu vi hình tròn là : " + c);
//return {dientich :s ,chuvi :c}
//}
//tron();


//bài 3
//function giaithua(x){

  //  if (x < 0){
    //    return "Không có giai thừa cho số âm ";
    //}
    //let result = 1;
    //for (let i = 1;i <= x; i++) {
//result *=i;
  //  }
    //return result;
//}
//let x = parseInt(prompt("Nhập số nguyên  :"));
//document.write(x + "! =" + giaithua(x))


//bài 4
//function kiemtraso(ch){
  //  return /^[0-9]$/.test(ch);
//}
//let x = prompt("Nhập kí tự : ");
//if (kiemtraso(x)) {
  //  document.write("'" + x + "'" + "là kí tự số");
//}else {
  //  document.write("'" + x + "'" + " không phải kí tự số ");
//}


//bài 5
//function minArray(arr) {
   // if (arr.length == 0) {
  //      return "Mảng rỗng!";
  //  }
  //  let min = arr[0];
  //  for (let i = 1; i < arr.length; i++) {
   //     if (arr[i] < min) {
    //        min = arr[i];
 //       }
 //   }
 //   return min;
//}

//let arr1 = [];
//for (let i = 0; i < 5; i++) {
  //  let x = parseInt(prompt("Nhập số nguyên thứ " + (i + 1) + ":"));
 //   arr1.push(x);
//}
//let min = minArray(arr1);
//alert("Mảng bạn nhập: " + arr1.join(", "));
//alert("Giá trị nhỏ nhất là: " + min);


//bài 6
//function kiemtra(){
//    let x = parseInt(prompt("Nhập số nguyên dương :"));
  // if (x > 0){
  //      alert("True");
  //  }else{
   //     alert("False");
 //   }
//}
//kiemtra();



//bài 7
//function swap(a, b) {
    //let temp = a;
 //   a = b;
  //  b = temp;
 //   return [a, b];
//}

//let x = parseInt(prompt("Nhập số nguyên thứ nhất:"));
//let y = parseInt(prompt("Nhập số nguyên thứ hai:"));

//let result = swap(x, y);
//document.write("Sau khi đổi chỗ: x = " + result[0] + ", y = " + result[1]);


//bài 8
//function daoNguocMang(arr) {
 //   return arr.reverse(); // dùng hàm dựng sẵn của JS
//}

//let n = parseInt(prompt("Nhập số phần tử của mảng:"));
//if (n > 10){
  //  n = 10;
    //alert("Bạn chỉ nhập tối đa 10 phần tử" );
//}
//let arr = [];

//for (let i = 0; i < n; i++) {
  //  arr.push(parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":")));
//}

//document.write("Mảng ban đầu: " + arr.join(", ") + "<br>");
//document.write("Mảng sau khi đảo ngược: " + daoNguocMang(arr).join(", "));


//Bài 9
//function demKyTu(arr, ch) {
  //  let count = 0;
   // for (let i = 0; i < arr.length; i++) {
     //   if (arr[i] === ch) {
       //     count++;
        //}
    //}
    //return count > 0 ? count : -1;
//}


//let n = parseInt(prompt("Nhập số phần tử của mảng:"));
//let arr = [];

//for (let i = 0; i < n; i++) {
  //  arr.push(prompt("Nhập ký tự thứ " + (i + 1) + ":"));
//}

//let kyTu = prompt("Nhập ký tự cần kiểm tra:");
//let result = demKyTu(arr, kyTu);

//if (result === -1) {
  //  document.write("Ký tự '" + kyTu + "' không có trong mảng.");
//} else {
  //  document.write("Ký tự '" + kyTu + "' xuất hiện " + result + " lần trong mảng.");
//}

