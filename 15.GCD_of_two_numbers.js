
//greatest common divisor of two numbers

let n1= 50;
let n2= 25;
let GCD=0;

for(let i=1;i<= n1 && i<= n2; i++) {
  if(n1 % i == 0 && n2 % i == 0) {
    GCD = i;
  }
}

console.log(GCD)
