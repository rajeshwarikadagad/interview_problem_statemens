let arr = ["apple", "pineapple","orange","banana"];
//output: ["apple",1, "pineapple", 2,"orange",3,"banana"]
let newarr = [];
/* method-1 */
  array.forEach((item, index) => newarr.push(item, index+1));
  console.log(newarr);


/* method -2 */
let maxLength = arr.length * 2;
let count = 1;
for(let i =0; i<= maxLength; i++) {
if(i%2 == 0) continue;

  arr.splice(i, 0, count)  ;
  count++;
}
console.log(arr);


##############################
let arr  = [{a: 'a'}, {b: 'c'}, {c: 'd'},{d: 'a'}];

    //Output = [‘a’ , ‘c’ , ‘d’, ‘a’];

let newarr =[];
arr.forEach(item =>
  newarr.push(Object.values(item)[0])
  );
  console.log(newarr);
