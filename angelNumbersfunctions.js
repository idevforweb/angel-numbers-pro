"use strict";

import array from "./data.js";

const log = (x) => console.log(x);

let angelNumbersCounter = {},
  angelCountArr = [],
  threeDigitArr = [],
  fourDigitArr = [],
  fiveDigitArr = [];

// Declarative : Count all array numbers and

// and create object with { Key : Values } pairs.

array.forEach(
  (angelNumber) =>
    (angelNumbersCounter[angelNumber] =
      (angelNumbersCounter[angelNumber] || 0) + 1)
);

// Object Pairs created are pushed to an array angelCountArr [ key, val ]

for (var angelNumber in angelNumbersCounter) {
  angelCountArr.push([angelNumber, angelNumbersCounter[angelNumber]]);
}

// Sort the Array by value. [key,1],[key,2],[key,3]

angelCountArr.sort(function (a, b) {
  return a[1] - b[1];
});

// log( Math.max(angelCountArr));

for (const angelNumber in angelNumbersCounter) {
  if (angelNumber.length === 3) threeDigitArr.push(angelNumber);
  if (angelNumber.length === 4) fourDigitArr.push(angelNumber);
  if (angelNumber.length === 5) fiveDigitArr.push(angelNumber);
}

const threeDigitNumbers = threeDigitArr.length,
  fourDigitNumbers = fourDigitArr.length,
  fiveDigitNumbers = fiveDigitArr.length,
  uniqueAngelNumbers = angelCountArr.length,
  angelNumbersLength = array.length;

let numbersSeenText = "";

function logs() {
  log(
    threeDigitNumbers +
      " : Three digit numbers seen.\n\n" +
      threeDigitArr.join(", ") +
      "\n"
  );

  log(
    fourDigitNumbers +
      " : Four digit numbers.\n\n" +
      fourDigitArr.join(", ") +
      "\n"
  );

  log(
    fiveDigitNumbers +
      " : Five digit numbers seen.\n\n" +
      fiveDigitArr.join(", ") +
      "\n"
  );

  log(uniqueAngelNumbers + " : Unique Angel Numbers.");

  log(angelNumbersLength + " : Total Angel Numbers Seen.");

  log(`\nAngel Number Counts\n`);

  for (let value in angelNumbersCounter) {
    let time = "time",
      space = "";

    angelNumbersCounter[value] != 1 ? (time = "times") : time;

    if (value.length === 3) space = "   ";

    if (value.length === 4) space = "  ";

    if (value.length === 5) space = " ";

    log(`${value}${space} seen ${angelNumbersCounter[value]} ${time}`);
  }
}

// array.length > 0 ? logs() : log("No Entries");
