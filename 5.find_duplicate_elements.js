// find duplicate elements from the string/array

/* method -1 */
let str="aaabcrtgfgss";

let arry = str.split('');
let duplicateArr = [];
 arry.forEach((item, i) => {
     if(arry.indexOf(item) !== i && duplicateArr.indexOf(item) == -1) 
        duplicateArr.push(item) 
  });
console.log('duplicateArr', duplicateArr);


/* method-2 */

for(let i=0; i<str.length; i++) {
          let count =0;
            for(let j=0; j< str.length; j++) {
              if(str[i] == str[j]) {
                count++
                if(count> 1 && duplicateArr.indexOf(this.str[i])=== -1) {
                  duplicateArr.push(str[i])
                }
              }
            }
        }
        console.log('element: ', duplicateArr);


/* method-3 */
 for (let i = 0; i < str.length; i++) {
  if (str.indexOf(str[i]) !== i && duplicateArr.indexOf(str[i]) === -1) {
    duplicateArr.push(str[i]);
  }
}

console.log(duplicateArr)
