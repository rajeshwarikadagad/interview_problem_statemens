//write a program to reverse a given array or string


let arr = [1,2,3,4,5,6];
let str = "hello good morning";
let reversedString = '';

/* method -1 using built in direct method */

 reversedString = str.split('').reverse().join('');

console.log("reversedString - 1 ", reversedString);
console.log('reverse arr ', arr.reverse())

######################################################

/* method -2  for loop*/

reversedString='';

for(let i = str.length-1; i >= 0; i--) {
  reversedString += str[i]
}

console.log("reversedString - 2  ", reversedString);


/* method-3*/
 let lastIndex = this.rvrArrayList.length - 1;
        for (let i = 0; i < this.rvrArrayList.length / 2; i++) {
            let temp = this.rvrArrayList[i];
            this.rvrArrayList[i] = this.rvrArrayList[lastIndex];
            this.rvrArrayList[lastIndex] = temp;
            lastIndex--;
        }


#################################
//How would you reverse words in a sentence?
console.log(str.split(' ').map(word => word.split('').reverse().join('')).join(' '))



