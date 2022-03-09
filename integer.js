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



// =================array 157 

// let arr =[7,10,5,3,2];
// let newArr =[]

// for (let i =0; i<arr.length;) {
//     console.log(arr[i]);
//     i+=2
// }
// for (let i =1; i<arr.length;) {
//     console.log(arr[i]);
//     i+=2
// }

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
// let natija = true
// let n = arr[1] - arr[0]

// for (let i =arr.length-1; i>0; i--) {
//     if (arr[i]-n !== arr[i-1]){
//         natija = false;
//         break;
//     }
//     else if (arr[i]-n == arr[i-1]){
//         natija = n;
//     }
// }
// console.log(natija);


// =================array 165 

// let arr = [2, 6, 18]
// // let arr = [-2, 4, -8, 16, -32];
// let natija = true
// let n = arr[1] / arr[0]

// for (let i =arr.length-1; i>0; i--) {
//     if (arr[i]/n !== arr[i-1]){
//         natija = false;
//         break;
//     }
//     else if (arr[i]/n == arr[i-1]){
//         natija = n;
//     }
// }
// console.log(natija);

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



// =================array 168

// let arr = [1, -3, 12, -1, 3, -4]
// let arr = [-2, 4, -8, 16, -32]
// let start = arr[0]
// let count = 0
// let newArr = []

// for (let i=0; i<arr.length; i++) {
//     if (start< arr[i]){
//         newArr[newArr.length] = i
//         count++;
//     }
// }
// console.log(newArr, count);


// =================array 169

// let arr = [-2, 5, -10, 12, 3, -4, -5]
// let start = arr[0]
// let count = 0;
// let newArr = []

// for (let i=arr.length; i>0; i--) {
//     if (start< arr[i]){
//         newArr[newArr.length] = arr[i]
//         count++;
//     }
// }
// console.log(newArr, count);

// =================array 170

// let arr = [1, 2, -10, 3, 5] ;
// let r = 5;
// let a = arr[0]
// let res = Infinity;

// for (let i=0; i<arr.length; i++) {
//     const t = Math.abs(arr[i] -r);
//     if (res>t) {
//         res = t;
//         a = arr[i]
//     }
// }
// console.log(a);


// =================array 171 chala

// let arr = [1, -10, 2, 1, 2, 5];
// let newArr = [];

// for (let i =0; i<arr.length; i++) {
//     if 
// }


// =================array 172 chala

// let a = [true, -5];
// let b = [2, null]

// for (let i =0, j=0; i<a.length, j<b.length; i++, j++) {
//     if (a.length==b.length){
//         a = b[j];
//         b = a[i]
//     }
// }
// console.log(a, b);


// =================array 173

// let a = [2, 5, 6, 4,4]
// let b = [];

// for (let i =0; i<a.length; i++){
//     if (a.length <=5) {
//         b[b.length] =2 * a[i];
//     }
//      else {
//          b[b.length] = a[i] /2 
//      }
// }
//  console.log(b);

// =================array 174

// let a = [10, -5];
// let b = [5, 1];
// let c = []

// for (let i =0, j=0; i<a.length, j<b.length; i++, j++) {
//     if (a[i] > b[j]) {
//         c[c.length] = a[i]
//     }
//      else {
//         c[c.length] = b[j]
//      }
// }
// console.log(c);

// =================array 175

// let a = [1, 2, 3, 4, 5]
// let b = []

// for (let i =0; i<a.length; i++) {
//     if (a[i] % 2==0) {
//         b[b.length] = a[i]
//     }
// }
// console.log(b);

// =================array 176

// let a = [1, 2, 3, 4, 5]
// let b =[]
// let count = 0

// for (let i =0; i<a.length; i++) {
//     count += a[i]
//     b[b.length]= count
// }
// console.log(b);


// =================array 177


// let a = [1, 2, 3, 4, 5]
// let b =[]

// for (let i =0; i<a.length; i++) {
//     let count = 0
//     for (let j =i; j<a.length; j++){
//         count += a[j]
//     }

//     b[i]= count
// }
// console.log(b);


// =================array 179
    
// let n =10;
// let fib = [0, 1];
// let data = [];

// for(let i = 2; i <= n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2]; 
//     data.push(fib[i]);
// }
// console.log(data);

// =================array 180

// let arr = [1, 2, 10, 5, 6, 7] 
// let max = arr[0]
// let min = arr[0]

// for (let i =0, j=0; i<arr.length, j<arr.length; i++, j++) {
//     if (max<arr[i]){
//         max = arr[i]
//     }
//     else if (min> arr[i]){
//         min = arr[i]
//     }
// }
// console.log(max, min);


// =================array 181





// =================array 182

// let arr = [7, 3, 5, 3, 2];
// // let arr =[1, 2, 3]
// let n =3;
// let t =0

// for (let i=0; i<arr.length; i++) {
//     if (arr[i]==n) {
//         t = i
//         break
//     }
//     else {
//         t = -1
//     }
// }
// console.log(t);
