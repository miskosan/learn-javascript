/* This script displays a greeting to the user based upon the current time. */

let today = new Date(); // Create a new date object
let hourNow = today.getHours(); // Find thr current hour
let greeting;

// Display the appropriate greeting based on the current time
if (hourNow > 18) {
  greeting = "Good evening!";
} else if (hourNow > 12) {
  greeting = "Good afternoon!";
} else if (hourNow > 0) {
  greeting = "Good morning!";
} else {
  greeting = "Welcome!";
}

document.write("<h3>" + greeting + "</h3>");
