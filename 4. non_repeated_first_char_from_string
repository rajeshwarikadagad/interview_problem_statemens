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
