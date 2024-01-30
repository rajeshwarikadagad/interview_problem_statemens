

function balancedBrackets(str) {
  let stack =[]; //LIFO;
  let closedBrackets = ')}]';
    if(str.length <= 1) return false;
    
    for(let i=0; i< str.length; i++) {
      if(str[i] === '[' || str[i] === '{' || str[i] === '(') {
        stack.push(str[i]);
      } else {
   
        if(closedBrackets.includes(str[i])){
           if(!stack.length) return false;
           char = stack.pop();
            if( (str[i] === ']' && char !== '[' ) || (str[i] === '}' && char !== '{') || (str[i] === ')' && char !== '(' ) ) {
             return false;
           }  
        } 
      }
    }
    if(stack.length){
      return false;
    } else return true;
}

input = '[hello({$Raji})]';


console.log(balancedBrackets(input));
