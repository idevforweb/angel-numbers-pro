"use strict";

const log = (x) => console.log(x);

// Imports
import array from "./data.js";

// Create AngelNumberClass blueprint
class AngelNumberClass {
  // Constructor
  constructor(angelNumbers, ...argObj) {
    argObj = {
      angelNumberCounter: {},
    };

    this.angelNumbers = angelNumbers;
    this.counterArray = argObj.counterArray = [];
    this.angelNumbersCounter = argObj.angelNumberCounter;
  }

  // Sorting methods : methods that sort arrays angel numbers in array

  // Count all angel Numbers
  countAllAngelNumbers() {
    return this.angelNumbers.length;
  }
  // Sort all numbers by low numbers
  sortByLowNumbers() {
    return this.angelNumbers.sort();
  }
  // Sort all numbers by high numbers
  sortByHighNumbers() {
    return this.angelNumbers.sort().reverse();
  }

  // List and count all angelNumbers in an object ( angelNumber : count )
  timeSeenAll() {
    this.angelNumbers.forEach(
      (angelNumber) =>
        (this.angelNumbersCounter[angelNumber] =
          (this.angelNumbersCounter[angelNumber] || 0) + 1)
    );
    return this.angelNumbersCounter;
  }

  // Select numbers by digit length : 3 = [111,222,333]..etc
  arrayByDigitLength(length) {
    const digitArray = [];
    for (let number in this.angelNumbersCounter) {
      if (number.length === length) digitArray.push(number);
    }
    return digitArray;
  }

  // all array numbers to objects array, { key : value }
  //output {'numStr': '111', 'numInt': 111}
  numbersAndStringsOutput(strArr = [], intArr = [], obj) {
    array.forEach((number) => {
      const map = new Map([
        ["numStr", String(number)],
        ["numInt", number],
      ]);
      obj = Object.fromEntries(map);

      //push all numbers to array string formatted
      strArr.push(obj.numStr);
      // push to array intformated
      intArr.push(obj.numInt);
    });

    return new Object({
      numberStr: strArr,
      numbersInt: intArr,
    });
  }

  // All array numbers to numbers object, { key : value }
  // Output: { '1111': 1111 }
  numbersToKeyValObj(arr = []) {
    this.angelNumbers.forEach((number) => {
      arr.push([number, number]);
    });
    return Object.fromEntries(arr);
  }

  /* 
  Next block of codes will use timesSeenAll()
  method and filter thru it. All results will be pushed to
  counterArray then counted.
  */

  // count the times seen, by number length.
  timesSeenbyNumberLength(number) {
    for (const angelNumber in this.timesSeenAll()) {
      if (angelNumber.length === number) this.counterArray.push(angelNumber);
    }
    return this.counterArray.length;
  }

  // Number of times a specific number has been seen
  timesSeenBySpecificNumber(number) {
    return this.sortByLowNumbers().filter((angNum) => angNum === number).length;
  }
}

// Create 'myArray' Object from ArrayClass blueprint
let myArray = new AngelNumberClass(array);

// test class and method

const angelNumberObj = {
  countAllNumbers: myArray.countAllAngelNumbers(),
  sortByLowNumbers: myArray.sortByLowNumbers(),
  sortByHighNumbers: myArray.sortByHighNumbers(),
  timeSeenAll: myArray.timeSeenAll(),
  numberStrings: myArray.numbersToKeyValObj(),
  timesSeenBySpecificNumber: myArray.timesSeenBySpecificNumber(111),
  numbersAndStrings: myArray.numbersAndStringsOutput(),
  allNumbersString: myArray.numbersAndStringsOutput().numStr,

  arrayByDigitLength(digit) {
    return myArray.arrayByDigitLength(digit);
  },
};

log(angelNumberObj.countAllNumbers);
log(angelNumberObj.sortByLowNumbers);
log(angelNumberObj.sortByHighNumbers);
// log(angelNumberObj.countRepeatNumbers);
// log(angelNumberObj.getAllStringNumbers);
log(angelNumberObj.arrayByDigitLength(3));
log(angelNumberObj.numberStrings);
log(angelNumberObj.timesSeenBySpecificNumber);
log(angelNumberObj.numbersAndStrings);
