// finding non repeated first char from the given string 

let obj ={};
let str =" abc dAd";

 (str.toLowerCase()).split('').forEach(item => {
   if(obj.hasOwnProperty(item)) {
    return obj[item]++
   } else {
     obj[item]=1 
   }
  });
let keysSorted =Object.keys(obj).find(item => obj[item] == 1)
console.log(keysSorted);


/****************************/
let ch ='';
let arr = str.toLowerCase().split('');
for(let i =0; i<arr.length; i++) {
  let isUni = true;
 for(let j=0; j<arr.length; j++) {

    if(arr[i] === arr[j] && i !==j) {
      isUni = false;
    }
   
 }
 if(isUni) {
  ch=arr[i];
break ;
}
} 
console.log(ch) ;
