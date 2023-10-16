/*
 *
 *  Scenario: Read in 5 numbers using a prompt
 *  statement.
 *
 *  After reading the numbers in, put them into an
 *  array called numbers. Then, calculate and print
 *  out the:
 *
 *  - largest number
 *  - smallest number
 *  - sum of the numbers
 *  - range of the numbers
 *  - average of the numbers
 *
 */

//  Create global variables
let number1 = 0;
let number2 = 0;
let number3 = 0;
let number4 = 0;
let number5 = 0;
let numbers = [];
let str = "";

//  main() is the program driver
function main() {
  inputThe5Numbers();
  putThe5NumbersIntoAnArray();
  let largestNumber = findTheLargestNumber();
  let smallestNumber = findTheSmallestNumber();
  let sumOfNumbers = findTheSumOfTheNumbers();
  let rangeOfNumbers = findTheRangeOfTheNumbers(largestNumber, smallestNumber);
  let averageOfNumbers = findTheAverageOfTheNumbers(sumOfNumbers);
  displayAllArrayStatistics(
    largestNumber,
    smallestNumber,
    sumOfNumbers,
    rangeOfNumbers,
    averageOfNumbers
  );
}

function inputThe5Numbers() {
  number1 = parseInt(prompt("Enter a number"));
  number2 = parseInt(prompt("Enter a number"));
  number3 = parseInt(prompt("Enter a number"));
  number4 = parseInt(prompt("Enter a number"));
  number5 = parseInt(prompt("Enter a number"));
}

function putThe5NumbersIntoAnArray() {
  numbers[0] = number1;
  numbers[1] = number2;
  numbers[2] = number3;
  numbers[3] = number4;
  numbers[4] = number5;
}

function findTheLargestNumber() {
  //  Assume that the largest number is the first one.
  let biggest = numbers[0];

  //  Iterate through the rest of the array.
  for (let lcv = 1; lcv < numbers.length; ++lcv) {
    //  If the current number is > biggest,
    //  make the new largest
    if (numbers[lcv] > biggest) {
      biggest = numbers[lcv];
    }
  }

  //  Return the largest number in the array
  return biggest;
}

function findTheSmallestNumber() {
  //  Assume that the largest number is the first one.
  let littlest = numbers[0];

  //  Iterate through the rest of the array.
  for (let lcv = 1; lcv < numbers.length; ++lcv) {
    //  If the current number is < littlest,
    //  make the new largest
    if (numbers[lcv] < littlest) {
      littlest = numbers[lcv];
    }
  }

  //  Return the smallest number in the array
  return littlest;
}

function findTheSumOfTheNumbers() {
  let theSum = 0;

  for (let lcv = 0; lcv < numbers.length; ++lcv) {
    theSum += numbers[lcv];
  }

  return theSum;
}

function findTheRangeOfTheNumbers(largestNumber, smallestNumber) {
  return largestNumber - smallestNumber;
}

function findTheAverageOfTheNumbers(sumOfNumbers) {
  return sumOfNumbers / numbers.length;
}

function displayAllArrayStatistics(l, s, sum, r, avg) {
  let str = "Largest Number: " + l + "\n";
  str += "Smallest Number: " + s + "\n";
  str += "Sum Of All Numbers: " + sum + "\n";
  str += "Range Of Numbers: " + r + "\n";
  str += "Average Of Numbers: " + avg;

  alert(str);
}
