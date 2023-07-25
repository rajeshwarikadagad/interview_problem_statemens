
//fibonacci series

let n1=0;
let n2=1;
let nextNum = 0;
let N = 10;

if(N === 0) {console.log(0) };
if(N===1) { console.log(1)
} else{
  for(let i = 1; i<= N; i++) {
    console.log(n1);
    nextNum = n2 + n1
     n1 = n2;
     n2 = nextNum;
      
  }
}
