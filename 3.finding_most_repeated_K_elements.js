//find the repeated elemts from the given array and print 2 most repeated elements k=2


let arr= [1,1,2,3,4,4,3,3,3,2,1];
let k =2;
let obj ={};

 arr.forEach(item => {
   if(obj[item]) { //obj.includes(item)
    obj[item]++;
   } else {
     obj[item]=1;
   }
  });

  let keysSorted = (Object.keys(obj).sort((a,b) => obj[b]-obj[a])).splice(0,k)
 
console.log(keysSorted);


