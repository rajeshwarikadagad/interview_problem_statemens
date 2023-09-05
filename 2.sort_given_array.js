// sort a given array in ascending order

/*method -1 built in method */

let arr = [1,4,3,5,2,6,19,-1];
// console.log(arr.sort((a,b) => a-b));

var InputArr = [{ p: 4 }, { p: 2 }, { p:9 }, { p: 6 }]; // sorting array of objects
let sortedArr = InputArr.sort((a,b) => a.p - b.p)
console.log(sortedArr)


/*method -2  using for loop  selection sort*/
for(let i =0; i<arr.length; i++) {
  for(let j=0; j<arr.length; j++) {
    if(arr[i] < arr[j]) { // [arr[i], arr[j]] = [arr[j],arr[i]] // swapping
      let temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
    }
  }
}

console.log(arr);


/* method -3 using single for loop */
let s = [4, 6, 3, 1, 2];
for (let i = 0; i < s.length;) {
    if (s[i] > s[i + 1]) {
        let a = s[i];
        s[i] = s[i + 1];
        s[i + 1] = a;
        i--;
    }
    else {
        i++; 
    }
}
console.log(s);


