//
// Simulated function to fetch data from a server
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful response
      const data = { message: 'Data fetched successfully' };
      resolve(data);

      // Simulate an error response
      // reject(new Error('Failed to fetch data'));
    }, 2000); // Simulate a 2-second delay
  });
}

// Example usage of the Promise
fetchData()
  .then((data) => {
    console.log(data.message);
  })
  .catch((error) => {
    console.error(error.message);
  });



//--------------------------------------------
// 
//Here's a simplified example of a REST API using Promises,
//focusing on just the essential parts for managing a list of books without the HTTP server:

// Simulated book data
let books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
];

// Function to get all books
function getAllBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(books);
    }, 1000);
  });
}

// Function to add a new book
function addBook(newBook) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const id = books.length + 1;
      newBook.id = id;
      books.push(newBook);
      resolve(newBook);
    }, 1000);
  });
}

// Function to delete a book by ID
function deleteBook(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = books.findIndex((book) => book.id === id);
      if (index !== -1) {
        books.splice(index, 1);
        resolve('Book deleted');
      } else {
        reject(new Error('Book not found'));
      }
    }, 1000);
  });
}

// Example usage:

// Get all books
getAllBooks()
  .then((data) => {
    console.log('All Books:', data);
  });

// Add a new book
addBook({ title: 'New Book', author: 'New Author' })
  .then((book) => {
    console.log('Added Book:', book);
  });

// Delete a book
deleteBook(1)
  .then((message) => {
    console.log('Delete Result:', message);
  })
  .catch((error) => {
    console.error('Delete Error:', error.message);
  });

//--------------------------REST API GET ------------------------
// The fetch() method in JavaScript is used to request data from a server. 
// The request can be of any type of API that returns the data in JSON or XML.
// The fetch() method requires one parameter, the URL to request, and returns a promise.


function fetchData() {
  return new Promise((resolve, reject) => {
    // Replace this URL with your actual endpoint
    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Example usage:
fetchData()
  .then((data) => {
    console.log('Data received:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });


