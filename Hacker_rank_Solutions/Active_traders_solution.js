function mostActive(customers) {
    // Write your code here
     let obj= {};
  customers.forEach(item => {
      if(obj[item]) {
          obj[item] += 1;
      } else {
          obj[item] =1;
       }
  });
let result=  Object.keys(obj).filter(item =>  Math.floor((obj[item]/customers.length)*100) >= 5).sort();

    return result;
}


let customers = [ 
'Omega',
'Alpha',
'Omega',
'Alpha',
'Omega',
'Alpha',
'Omega',
'Alpha',
'Omega',
'Alpha',
'Omega',
'Alpha',
'Omega',
'Alpha',
'Omega',
'Alpha',
'Omega',
'Alpha',
'Omega',
'Beta'];

mostActive(customers);
