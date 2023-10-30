// Debounce example
// Debouncing is a technique used to improve performance by delaying the execution of a function 
// until after a certain amount of time has passed since the last invocation.
// This is particularly useful for scenarios like handling user input (e.g., search suggestions) or resizing events to avoid excessive,
// rapid function calls. Here's an example of how to implement debounce in JavaScript:



function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
  //   const context = this;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func();
    }, delay);
  };
}

// Example usage:
const debouncedFunction = debounce(() => {
  console.log('Debounced function called');
}, 1000);

// Simulate multiple rapid function calls
debouncedFunction(); // Will not execute immediately
debouncedFunction(); // Will not execute immediately
   
// After waiting for 1000ms (1 second) since the last call, the function will execute.

// ---------------------------------------throattling-------------------------------------------------//


// Throttling is a technique used to limit the rate at which a function is executed. 
// It ensures that a function is called at a maximum frequency of once every n milliseconds.
// Here's an example of how to implement throttling in JavaScript:


function throttle(func, delay) {
  let canClick = true;

  return function () {
    // const context = this;
    // const args = arguments;

    if (canClick) {
      func();
      canClick = false;

      setTimeout(() => {
        canClick = true; 
      }, delay);
    }
  }; 
}

// Example usage for throttling a button click event
function handleClick() {
  console.log('Button clicked');
}

const throttledClick = throttle(handleClick, 2000); // Throttle every 1000ms (1 second)

const button = document.getElementById('my-button');
button.addEventListener('click', throttledClick);





