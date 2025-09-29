//bài 1

//let x = [5,10,19,30,2,11,22,1,7,15];
//let count = 0;
//for (let i =0;i<x.length;i++) {
  //  if (x[i] >= 10)  {
    //count++;

    //}
//}
//console.log('số phần tử lớn hơn 10 là '+count);


// bài 2
//let x = [5,10,19,30,2,11,22,1,7,15];
//let max =x[0];
//for (let i = 1; i <x.length; i++) {
  //  if (x[i] > max) {
  //      max = x[i];
    //}
//}
//console.log( " giá tr lớn nhất trong mảng là " + max);



//bài 3
//let x = [5,10,19,30,2,11,22,1,7,15];
//let max = x[0];
//let tb = x[0];
//for (let i = 1; i < x.length; i++) {
  //  if (x[i] > max ) {
    //    max = x[i];
    //}
    //tb  +=x[i];
//}
//let average =tb/x.length;
//console.log(' giá trị lớn nhất là'+ max );
//console.log(' giá trị trung bình là ' +  average );


//bài 4
//let x =[1,3,5,7,9,11,13,15];
//console.log(' mảng ban đầu' + x);
//let z=[]
//for (let i=x.length;i>0;i--){
//    z.push(x[i])
//}
//console.log(z);



//bài 5
//let x =[-1,-3,-5,1,4,14,0]
//let count = 0;
//for (let i = 0; i < x.length; i++) {
  //  if (x[i] <0) {
    //    count++;
    //}
//}
//console.log(' số phần tử âm trong mảng là' + count);


//bài 6
//let x = [5,10,19,30,2,11,22,1,7,15];
//let v = 22;
//let found = false;
//for (let i = 0; i <x.length; i++) {
  //  if (x[i] ===v){
    //    found = true;
      //  break;
    //}
//}
//if(found) {
  //  console.log("v is in the array");
//}else{
    //console.log("v is not in the array");
//}



//bài 7
//let x = [5,10,19,30,2,11,22,1,7,15];
//let v = 22;
//let index = x.indexOf(v);
 //if (index !== -1){
   //  for (let i = index; i < x.length - 1; i++) {
     //    x[i] = x[i + 1];
 //}
   //  x[x.length - 1] = 0; // gán phần tử cuối cùng = 0
     //console.log("Mảng sau khi xóa:", x);
 //} else {
   //  console.log("V is not in the array");
 //}



//bài 8
//let arr = [5, 10, 19, 30, 2, 11, 22, 1, 7, 15];

//arr.sort(function(a, b) {
  //  return b - a; // giảm dần
//});

//console.log("Mảng sắp xếp giảm dần:", arr);




//bài 9
//let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//let c = a.concat(b);

//console.log("Mảng c gồm 20 phần tử:", c);