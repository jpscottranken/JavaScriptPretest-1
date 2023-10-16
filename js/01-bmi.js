/*
 *
 *	1.	Scenario: A person's body mass index (BMI) is a
 *		value derived from the mass (weight) and height
 *		of the individual using the following formula:
 *
 *		bmi = (weight / (height * height)) * 703
 *
 *		The BMI is an attempt to quantify the amount of
 *		tissue mass (muscle, fat, and bone) in an individual,
 *		and then categorize that person as underweight,
 *		optimal weight, overweight, or obese based on that
 *		value.
 *
 *		There is some debate about where on the BMI scale
 *		the dividing lines between categories should be placed.
 *
 *		Commonly accepted BMI ranges are:
 *		============================================================
 *		Underweight: 				BMI < 18.50
 *		Optimal weight: 			BMI >= 18.50 and < 25.00
 *		Overweight: 				BMI >= 25.00 and < 30.00
 *		Obese: 						BMI >= 30.00
 *
 *		Your Requirements:
 *		==================
 *
 *		a)	Create global constants for minimum weight (1 pound),
 *			maximum weight (777 pounds), minimum height (12 inches),
 *			and maximum height (96 inches).
 *
 *		b)	Create a main() function.  All of your variables should
 *			be declared in main(), and all of your code should be
 *			written in main(). At the end of each BMI iteration, ask
 *			the user if s/he wants to run the program again and let
 *			them do so indefinitely if/as desired.
 *
 *		c)	Put in code to input height; not allowing for blank,
 *			non-numeric, or out-of-range inputs.
 *
 *		d)	Put in code to input weight; not allowing for blank,
 *			non-numeric, or out-of-range inputs.
 *
 *		e)	Using the formula given, calculate the person's BMI
 *			to 2 decimal places.
 *
 *		f)	Using the calculated BMI and the table shown,
 *			determine the person's BMI status.
 *
 *		g)	Output each person's height, weight, calculated BMI,
 *			and BMI status via a JavaScript alert dialog.
 *
 *		h)	In addition, create accumulators in main() for the
 *			following:
 *
 *		1.	Total number of underweight persons.
 *		2.	Total number of optimal weight persons.
 *		3.	Total number of overweight persons.
 *		4.	Total number of obese persons.
 *
 *		i)	At the end of the program (when the person no longer
 *			wants to input any more heights and weights), use a
 *			single alert() to print out the totals calculated above.
 *
 *		j)	Create a simple HTML file (bmi.html) that calls your
 *			external JavaScript file (bmi.js) from it.  Put all
 *			JavaScript code into bmi.js.
 *
 */

//*******************************************************

/*
 *	Declare and initialize global accumulators:
 */
const MINHEIGHT = 12; //	Minimum height allowed
const MAXHEIGHT = 96; //	Maximum height allowed
const MINWEIGHT = 1; //	Minimum weight allowed
const MAXWEIGHT = 777; //	Maximum weight allowed
const MAXUNDER = 18.0; //	Highest BMI for underweight
const MINOVER = 25.0; //	Lowest  BMI for overweight
const MINOBESE = 30.0; //	Lowest  BMI for obese

//*******************************************************

//  This should be the program "driver"
function main() {
  //  Declare and initialize program variables
  let height = 0; // Height. Must be between 12 and 96
  let weight = 0; // Weight. Must be between 1 and 777
  let bmi = 0.0; // Calculated body mass index
  let bmiStatus = ""; // Underweight, Optimal Weight, Overweight, Obese
  //  Accumulators
  let totalUnderweight = 0; // Total number of underweight people
  let totalOptimalWeight = 0; // Total number of optimal weight people
  let totalOverweight = 0; // Total number of overweight people
  let totalObese = 0; // Total number of obese people
  //  Other variables
  let str1 = ""; // Program output string #1 (holds a person's info)
  let str2 = ""; // Program output string #2 (holds accumulators)
  let keepGoing = true; // Program continue variable
  let again = ""; // Run program again
  let firstChar = ""; // First character of again

  while (keepGoing) {
    //  while (keepGoing === true)
    str1 = "";

    //  Input the height
    height = parseInt(prompt("Enter a height from 12 - 96", 72));
    {
      //  Validate height is numeric and between 12 and 96
      while (isNaN(height) || height < MINHEIGHT || height > MAXHEIGHT) {
        height = parseInt(prompt("Bad Input!. Enter height 12 - 96", 72));
      }
    }

    //  Input the weight
    weight = parseInt(prompt("Enter a weight from 1 - 777", 175));
    {
      //  Validate weight is numeric and between 1 and 777
      while (isNaN(weight) || weight < MINWEIGHT || weight > MAXWEIGHT) {
        weight = parseInt(prompt("Bad Input!. Enter weight 1 - 777", 72));
      }
    }

    //  Calculate BMI
    bmi = ((weight / (height * height)) * 703).toFixed(2);

    //  Calculate BMI Status (underweight, optimal weight, etc.)
    //  Increment the associated accumulator
    if (bmi < MAXUNDER) {
      //  BMI < 18.5
      bmiStatus = "Underweight";
      totalUnderweight++;
    } else if (bmi < MINOVER) {
      //  BMI between 18.5 and < 25
      bmiStatus = "Optimal Weight";
      totalOptimalWeight++;
    } else if (bmi < MINOBESE) {
      //  BMI between 25 and < 30
      bmiStatus = "Overweight";
      totalOverweight++;
    } else {
      bmiStatus = "Obese";
      totalObese++;
    }

    //  Print out person's height, weight, bmi, and bmiStatus
    str1 += "Height: " + height + "\n";
    str1 += "Weight: " + weight + "\n";
    str1 += "BMI: " + bmi + "\n";
    str1 += "Status: " + bmiStatus + "\n";

    alert(str1);

    //  Ask user run program again or not
    again = prompt("Run Program Again (Y / N)", "Y");
    firstChar = again.charAt(0).toUpperCase();

    //  If first character input was a "Y", run program again
    if (firstChar === "Y") {
      keepGoing = true;
    } else {
      keepGoing = false;
    }
  }

  //  Print out total number underweight,
  //  total number optimal weight,
  //  total number overweight,
  //  total number obese people
  str2 += "Total Number Underweights: " + totalUnderweight + "\n";
  str2 += "Total Number Optimal Weights: " + totalOptimalWeight + "\n";
  str2 += "Total Number Overweights: " + totalOverweight + "\n";
  str2 += "Total Number Obese: " + totalObese + "\n";

  alert(str2);
}
