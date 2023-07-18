//find missing msallest positive numberfrom a given array


let arr =[1,2,4,-1,5,-2,0];
let missingNum = 1;

/* method-1 */
arr.forEach(item => {
  if(!arr.includes(missingNum)) {
    // console.log('missingNum', missingNum);
    return;
  } else{
    missingNum++;
  }
});


/* method-2 */
//sort the given array and find the index of first positive element

let sortedArr = arr.sort((a,b) => a-b);
let index= sortedArr.findIndex(element => element>0);
for(let i=index; i< sortedArr.length+1; i++) {
    if(sortedArr[i] !== missingNum) {
      console.log('missingNum', missingNum);
      break;
    } else {
      missingNum++;
    }
}
