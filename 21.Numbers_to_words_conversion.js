let n = 264;
//output: two hundred sixty four

let single_digit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
let double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
let below_hundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
let prefix = ['Hundred' ,'Thousand', 'Million', 'Billion'];

let word ='';
if(n == 0) {
  console.log('Zero');
}


let result = translate(n);

 
function translate(num){
  if(num < 10) {
    word = single_digit[num] + ' ';
  } else if(num < 20) {
   word = double_digit[num-10] + ' ';
  } else if(num < 100) {
  word = below_hundred[Math.floor(num/10) - 2] + ' ' + translate(num % 10); // (num - num%10)/10 
} else if(num < 1000) {
  word = single_digit[Math.trunc(num/100)] + ' Hundred ' + translate(num % 100);
} else if( num < 1000000) {
  word = translate(Math.floor(num/1000)).trim() + ' Thousand ' + translate(num % 1000);
} else if(num < 1000000000) {
  word = translate(parseInt(num/1000000)).trim() + ' Million ' + translate(num % 1000000);
} else {
  word = translate(parseInt(num/1000000000)).trim() + ' Billion ' + translate(num % 1000000000 );
}
return word; 
}


console.log(result);
