// =================array 153

// let arr =[7,10,5,3,2];
// let count =0;
// let newArr =[]

// for (let i=arr.length; i>0; i--) {
//     if (arr[i]%2==0) {
//         count++
//         newArr[newArr.length] =i;
//     }
// }
// console.log(newArr,count);


// =================array 154

// let arr =[7, 10, 5, 3, 2];
// let k =2
// let newArr = []

// for (let i =0; i<arr.length; i++) {
//     if (k<= arr.length && i%k==0) {
//         newArr[newArr.length] = arr[i]
//     }
// }
// console.log(newArr);


// =================array 155

// let arr =[7,10,5,3,2];
// let newArr =[]

// for (let i=0; i<=arr.length; i++) {
//     if (i%2==0) {
//         newArr[newArr.length] =arr[i];
//     }
// }
// console.log(newArr);


// =================array 156

// let arr =[7,10,5,3,2, true];
// let newArr =[]

// for (let i=arr.length; i>=0; i--) {
//     if (i%2==1) {
//         newArr[newArr.length] =arr[i];
//     }
// }
// console.log(newArr);



// =================array 157 chala

// let arr =[7,10,5,3,2];
// let newArr =[]

// for (let i=0; i<=arr.length; i++) {
//     if (i%2==0){
//         newArr[newArr.length] = arr[i]
//     }
//     else if (i%2==1) {
//         newArr[newArr.length]= arr[i]
//     }

// }
// console.log(newArr);

// =================array 158 

// let arr =[1, 2, 3, 10, -4, true];
// res = ""

// for (let i =0; i<arr.length/2; i++) {
//     res += arr[i] + " " + arr[arr.length-1-i] + " ";
// }
// console.log(res);


// =================array 159 

// let arr = [7, 10, 3, 5];
// let index = arr[arr.length - 1];
// let t = 'mavjud emas'

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < index) {
//         t = arr[i]
//         break;
//     }
// }
// console.log(t);

  




// =================array 160

// let arr = [10,12,5,11,13,15];
// let start = arr[0];
// let end = arr.length;
// let t = true;

// for(let i =arr.length-2; i>1; i--){
//   if(start<arr[i] && end<arr[i]){
//     console.log(i);
//     t=false;
//     break;
//   }
// }
// if(t==true){
//   console.log(false);
// }




// =================array 161

// let arr =[5, 10, 3, 7, 10, 12, 4];
// let k =0;
// let l = 4;
// let sum =0

// for (let i =0; i<arr.length; i++) {
//     if (i>k && i<l) {
//         sum += arr[i]
//     }
// }
// console.log(sum);

// =================array 162

// let arr =[5, 10, 3, 7, 10, 12, 4];
// let k =0;
// let l = 4;
// let sum =0
// let count = 0

// for (let i =0; i<arr.length; i++) {
//     if (i>k && i<l) {
//         sum += arr[i]
//         count ++;
//     }
// }
// console.log(sum/count);

// =================array 163

// let arr =[5, 10, 3, 7, 10, 12, 4];
// let k =0;
// let l = 4;
// let sum =0


// for (let i =0; i<arr.length; i++) {
//     if (i>l) {
//         sum += arr[i]
//     }
// }
// console.log(sum);


// =================array 164 

// let arr = [11, 14, 17, 20, 23];
// let natija = 0
// let count = 0

// for (let i =0; i<arr.length; i++) {
//     natija += arr[i+1] - arr[i];
//     count ++;
//     if (natija/count == arr[i+1] - arr[i]){
//         console.log(arr[i+1] - arr[i]);
//         break;
//     }
//     else {
//         console.log("false");
//     }
// }



// =================array 165 chala

// let arr = [11, 14, 17, 20, 23];
// let natija = 0

// natija=arr[1] - arr[0];
 
// for (let i =0; i<arr.length; i++) {
//     if (arr[i+1] - natija == arr[i]) {
//         console.log(natija);
//         break;
//     }
//     else {
//         console.log("false");
//     }
// }

// =================array 166

// let arr = [-2, 5, -10, 12, 3, -4, -5]
// let natija = true;

// if (arr[0] <0){
//  for (let i=0; i<=arr.length; i++) {
//     if ( i %2 ==0 && arr[i] > 0){
//         natija = i;
//         break;
//     }
//     else if (i %2 == 1 && arr[i] <0){
//         natija = i;
//         break;
//     }
//  }
// }
//  else {
//     for (let i=0; i<=arr.length; i++) {
//         if ( i %2 ==0 && arr[i] < 0){
//             natija = i;
//             break;
//         }
//         else if (i %2 == 1 && arr[i] >0){
//             natija = i;
//             break;
//         }
//      }
// }
// console.log(natija);


// =================array 167

// let arr = [-2, 5, -10, 12, 3, -4, -5]
// let sum = 0;
//  for (let i=0; i<=arr.length; i++) {
//      if (i%2==0) {
//          sum += arr[i]
//      }
//  }
//  console.log(sum);


