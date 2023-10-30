

//-------------------> call & apply ------------------------------------
//  With the call() and apply() method, you can write a method that can be used on different objects.

const displayName = {
  fName: 'kishore',
  fullName: function(UG, PG) {
   console.log( this.fName + ' ' + this.lName+ ' ' + UG +' '+ PG);
  }
}


const user1 = {
  fName: 'Raji',
  lName: 'Kadagad'
}

const user2 = {
  fName: 'Aayush',
  lName: 'Tiwari'
}

displayName.fullName.call(user1, 'Bsc', 'MCA');
displayName.fullName.apply(user2, ['BE', 'MTech']);

//-------------------- Call & Apply in functions----------------------------
function greet(message) {
  console.log(message, this.name);
}

const person = { name: 'John' };

greet.call(person, 'Hello'); // Output: "Hello John"

//-----------------------------------------Apply-----------------
function greet(message, punctuation) {
  console.log(message, this.name + punctuation);
}

const person = { name: 'John' };
const args = ['Hello', '!'];

greet.apply(person, args); // Output: "Hello John!"





//------------------------> BIND ---------------------------------
// With the bind() method, an object can borrow a method from another object.
const displayName = {
  fName: 'Kishore',
  lName: 'Sharma',
  fullName: function() {
  return  this.fName + ' ' + this.lName;
  }
}


const user1 = {
  fName: 'Raji',
  lName: 'Kadagad'
}

const user2 = {
  fName: 'Aayush',
  lName: 'Tiwari'
}

// displayName.fullName.call(user1, 'Bsc', 'MCA');
// displayName.fullName.apply(user2, ['BE', 'MTech']);


let fullName = displayName.fullName.bind(user2); 
console.log(fullName()) ;

//-------------------------------- Example-2
function greet(message) {
  console.log(message, this.name);
}

const person = { name: 'John' };
const greetJohn = greet.bind(person);

greetJohn('Hello'); // Output: "Hello John"


