// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

console.log('hello world')

/// TODO: replace this with your code

const logInButton = document.querySelector('#auth');


let logInLogOut = 'Log in'

const swap = (evt) => {
    const target =  evt.target;
    target.innerText = logInLogOut;
    console.log('it works')

    if (logInLogOut === 'Log in') {
        logInLogOut = 'Log out'
    } else {
        logInLogOut = 'Log in'
    }
    logInButton.innerText = logInLogOut;
}


logInButton.addEventListener('click', swap);
// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

const alertButton = document.querySelector('#send-alert');


const sendAlert = (event) => {
    event.preventDefault()
    alert('Form submitted')
 };

 
 alertButton.addEventListener('submit', sendAlert)

 // Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

const itemAdder = document.querySelector('#item-adder');

 
const addItem = () => {
    let list = document.getElementById('list')
    let newItem = document.createElement('li');
    newItem.textContent = 'Item';
    list.appendChild(newItem);
 };


 itemAdder.addEventListener('dblclick', addItem);

/// TODO: replace this with your code

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

/// TODO: replace this with your code

const turnRedButton = document.querySelector('#red');
const turnBlueButton = document.querySelector('#blue');
const colorElements = document.querySelectorAll('.changes-colors');


const changeToRed = () => {
    colorElements.forEach(element => element.style.color = 'red')
}

const changeToBlue = () => {
    colorElements.forEach(element => element.style.color = 'blue')
}


turnRedButton.addEventListener('click', changeToRed);
turnBlueButton.addEventListener('click', changeToBlue);


// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

/// TODO: replace this with your code

const numberInput = document.querySelector('#factorial-input');
const calculateButton = document.querySelector('#calculate-button');
const resultSpan = document.querySelector('#result');


const calculateFactorial = (number) => {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * calculateFactorial(number - 1);
    }
  };

const calculator = (event) => {
    event.preventDefault();
    let inputNumber = parseInt(numberInput.value, 10);
    if (Number.isInteger(inputNumber) && inputNumber >= 0) {
      let factorialResult = calculateFactorial(inputNumber);
      resultSpan.innerText = factorialResult;
    } else {
      alert('Please enter a non-negative integer.');
    }
  }


calculateButton.addEventListener('click', calculator)

// validate form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

/// TODO: replace this with your code

const wordForm = document.querySelector('#recommend-word');
const wordInput = document.querySelector('#word');
const feedback = document.querySelector('.form-feedback');

const checkLengthOfWord = (event) => {
    event.preventDefault();
    let textLength = wordInput.value.trim().length;
    
    if (textLength >= 4) {
        feedback.textContent = 'Thanks for your submission!';
        feedback.style.color = 'green';
      } else {
        feedback.textContent = 'The word must be at least 4 characters long.';
        feedback.style.color = 'red';
      }
}
wordForm.addEventListener('submit', checkLengthOfWord)