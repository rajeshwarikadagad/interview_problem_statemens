

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






//------------------------> Bind ---------------------------------
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

