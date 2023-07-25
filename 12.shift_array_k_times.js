let nums =[1,2,3,4,5,6,7];
let k = 3;
//Output: [5,6,7,1,2,3,4]

/* method-1 */
for(let i =0; i<k; i++) {
 let element = nums.pop();
 nums.unshift(element);
}


/*method-2 */
let lastIndex = nums.length-k;

for(let i=0; i<k; i++) {
  let temp = nums[i];
  nums[i]= nums[lastIndex];
  nums[lastIndex] = temp;
  lastIndex++;
}
console.log('nums', nums)
