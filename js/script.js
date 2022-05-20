'use strict'

function buttonClicked() {
  // declare counter, numbers and max variables
  let min = parseInt(document.getElementById('min').value);
  let max = parseInt(document.getElementById('max').value);
  let numbers = "";
  let counter = min

  // while loop to increment counter 
  while (counter <= max) {
    // to display the numbers
    numbers = numbers + counter + "<br>";
    // increases counter by 1
    counter = counter + 1;
  }

  // displays result
  document.getElementById('answers').innerHTML = numbers
}