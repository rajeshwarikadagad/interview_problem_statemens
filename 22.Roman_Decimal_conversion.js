// converting a number to Roman

let n = 283;
//output: two hundred sixty four
const values = [
  { symbol: 'M', value: 1000 },
  { symbol: 'CM', value: 900 },
  { symbol: 'D', value: 500 },
  { symbol: 'CD', value: 400 },
  { symbol: 'C', value: 100 },
  { symbol: 'XC', value: 90 },
  { symbol: 'L', value: 50 },
  { symbol: 'XL', value: 40 },
  { symbol: 'X', value: 10 },
  { symbol: 'IX', value: 9 },
  { symbol: 'V', value: 5 },
  { symbol: 'IV', value: 4 },
  { symbol: 'I', value: 1 },
];
let resutl = decimalToRoman(n);
console.log(resutl);
function decimalToRoman(decimal) {
  let result = '';
  for (let { symbol, value } of values) {
    while (decimal >= value) {
      result += symbol;
      decimal -= value;
    }
  }
  return result;
}
//#############################################
// converting romans to number
let roman ="CXLIII" ;//(143)
let result2 = romanToDecimal(roman)
function romanToDecimal(roman) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let previous = 0;
  for (let i = roman.length - 1; i >= 0; i--) {
    const current = values[roman[i]];
    if (current < previous) {
      result -= current;
    } else {
      result += current;
    }
    previous = current;
  }
  return result;
}
console.log(result2);
