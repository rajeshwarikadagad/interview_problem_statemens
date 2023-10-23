// merge two sorted arrys


let arr1=[1,3,4,7,8,9];
let arr2=[0,2,5];
let mergedArr = [];
let arrLength = (arr1.length > arr2.length) ? arr1.length : arr2.length; 

for(let i =0; i<=arrLength; i++) {
 
  if(arr1[i] < arr2[i]) {
    mergedArr.push(arr1[i],arr2[i]);
   
  } else {
    (arr2[i] || (arr2[i] == 0)) ?  mergedArr.push(arr2[i]): '';
    (arr1[i] || (arr1[i]==0)) ? mergedArr.push(arr1[i]): '';
  }

}
console.log(mergedArr);
