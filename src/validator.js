// Create a method: It's a property of type function.
// isValid = returns Boolean response
// maskify = returns a string reponse with "#"

const validator = {
  isValid: (creditCardNumber) => {
    const arrayReverse = creditCardNumber.split('').reverse();
    console.log(arrayReverse)
    // Position variables
    let oddPosition = '';  //[0]
    let evenPosition = ''; //[1]

    // Odd position
    for (let i = 0; i <= arrayReverse.length; i += 2) {
      oddPosition += i;
    }
    console.log(oddPosition);
    // Even position
    for (let i = 1; i <= arrayReverse.length; i += 2) {
      evenPosition += i;
    }4992149542521486
    console.log(evenPosition);
    let splitOddPosition = oddPosition.split('');
    console.log(splitOddPosition);
    function convertToNumber(number) {
      return Number(number);
    }

    const oddPositionArray = splitOddPosition.map(convertToNumber);
    console.log(oddPositionArray);
    let splitEvenPosition = evenPosition.split('');
    console.log(splitEvenPosition);
    function multiply(number) {
      return number * 2;
    }

    const multipliedNumber = splitEvenPosition.map(multiply);
    console.log(multipliedNumber);
    function reduceTwoDigits(multipliedNumber) {
      if (multipliedNumber > 9) {
        multipliedNumber = multipliedNumber.toString().split('');
        multipliedNumber = parseInt(multipliedNumber[0]) + parseInt(multipliedNumber[1]);
      }
      else {
        multipliedNumber = multipliedNumber;
      }
      return multipliedNumber;
    }

    const evenPositionArray = multipliedNumber.map(reduceTwoDigits);
    console.log(evenPositionArray);
    const completeArray = oddPositionArray.concat(evenPositionArray);
    console.log(completeArray);
    let total = completeArray.reduce((a, b) => a + b, 0);
    console.log(total);
    let residue = total % 10;
    console.log(residue);

    if (residue === 0) {
      return true;
    }
    else {
      return false;
    }
  },


  maskify: (creditCardNumber) => {
    let arrayLength = creditCardNumber.length;
    console.log(arrayLength);
  }
};

export default validator;
