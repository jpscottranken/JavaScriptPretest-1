/*
 *
 *	2.	Scenario: Write a JavaScript program that generates
 * 		a random number between 1 - 100 and asks the user to
 *		guess the number.  See the following URL for how to
 *		generate a random number:
 *
 *		https://www.w3schools.com/js/js_random.asp
 *
 *		Your Requirements:
 *		==================
 *		a)	Create constants for minimum guess (1),
 *			maximum guess (100), and any string text desired.
 *
 *		b)	Create a main() function.  All of your variables
 *			should be declared in main, and all of your code
 *			should be written in main(). At the end of each
 *			game iteration, ask the user if s/he wants to run
 *			the program again and let them do so indefinitely
 *			if/as desired.
 *
 *		c)	Put in code to clear all global and local variables
 *			at the beginning of each program run.
 *
 *		d)	Put in the code that generates a random number
 *			from 1 – 100 (the constants).
 *
 *		e)	Put in the code that lets the user make a guess.
 *
 *		f)	Put in the code to determine the guess status
 *			(too high, too low, or correct guess).
 *
 *		g)	If a (non-) guess is non-numeric, < 1 or > 100,
 *			the program should display "All guesses must be
 *			numbers between 1 - 100.  Please try again."  Do
 *			not increment total guesses.
 *
 *		h)	If a guess (e.g. 67) is higher/lower than the
 *			generated random number, the program should
 *			display "The guess of 67 is too high/low. Please
 *			try again."  Do increment total guesses.
 *
 *		i)	If a guess (e.g. 67) is correct, the user should
 *			be given an associated message like "The guess of
 *			67 in 4 guesses was correct!"  Increment total
 *			guesses.  Do increment total guesses.
 *
 *		j)	The program should continue to solicit user guesses
 *			until the user correctly guesses the random number.
 *
 */

//	Create global constants
const MIN = 1; //	Minimum allowed guess
const MAX = 100; //	Maximum allowed guess
const BAD = "All guesses must be numbers between 1 - 100.";
const PTA = " Please try again.";
const HIGH = " is too high";
const LOW = " is too low";
const OK1 = "The guess of ";
const OK2 = "  was correct!";
const OK3 = " It took you ";

//  main() is usually program driver
function main() {
  //  Declare and initialize program variables
  let randomNumber = 0; //  The random number between 1 - 100
  let youGuessedIt = false; //  User guess true or false
  let keepGoing = true; // Program continue variable
  let theStatus = ""; // Too high, too low, or correct
  let theGuess = 0; // Current guess
  let numGuesses = 0; // Number of guesses made
  let again = ""; // Run program again or not
  let firstChar = ""; // First character of again

  while (keepGoing) {
    // while (keepGoing === true)
    //  Generate a new random number between 1 and 100
    randomNumber = Math.floor(Math.random() * 100) + 1;

    numGuesses = 0; //  Set number of guesses to 0
    youGuessedIt = false; //  Set user guess the # to false
    theStatus = ""; // Guess status equal to the empty string

    while (!youGuessedIt) {
      //  while (youGuessedIt === false)
      //  Ask user to make a guess a number between 1 and 100
      theGuess = parseInt(prompt("Guess a # between 1 and 100", 50));

      //  Validate the guess is: 1) Numeric. 2) Between 1 and 100.
      if (isNaN(theGuess) || theGuess < MIN || theGuess > MAX) {
        theStatus = BAD + PTA; //  Set status
        alert(theStatus); //  Print status
        youGuessedIt = false; //  Send them back to guess again
      } else {
        //  The guess made was valid (between 1 and 100)
        numGuesses++; //  Incrementing number of guesses

        //  Check to see if guess too low, too  high, or correct
        if (theGuess < randomNumber) {
          //  Guess too low
          theStatus = OK1 + theGuess + LOW + PTA;
          alert(theStatus);
        } else if (theGuess > randomNumber) {
          // Guess too high
          theStatus = OK1 + theGuess + HIGH + PTA;
          alert(theStatus);
        } // Guess was correct
        else {
          theStatus = OK1 + theGuess + OK2 + OK3 + numGuesses + " guesses";
          alert(theStatus);
          youGuessedIt = true;
          keepGoing = false;
        }
      }
    }

    //  See if user wants to play again
    again = prompt("Run program again? (Y / N)", "Y");
    again = again.toUpperCase();
    firstChar = again.charAt(0);

    if (firstChar === "Y") {
      keepGoing = true;
    } else {
      keepGoing = false;
    }
  }
}
