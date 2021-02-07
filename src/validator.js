// Create a method: It's a property of type function.
// isValid = returns Boolean response
// maskify = returns a string reponse with "#"

const validator = {
  isValid: (creditCardNumber) => {
    const arrayReverse = creditCardNumber.split('').reverse();

    // Position variables
    let oddPosition = '';  //[0]
    let evenPosition = ''; //[1]

    // Odd position
    for (let i = 0; i <= arrayReverse.length; i += 2) {
      oddPosition += i;
    }

    // Even position
    for (let i = 1; i <= arrayReverse.length; i += 2) {
      evenPosition += i;
    }

    let splitOddPosition = oddPosition.split('');

    function convertToNumber(number) {
      return Number(number);
    }

    const oddPositionArray = splitOddPosition.map(convertToNumber);

    let splitEvenPosition = evenPosition.split('');

    function multiply(number) {
      return number * 2;
    }

    const multipliedNumber = splitEvenPosition.map(multiply);

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

    const completeArray = oddPositionArray.concat(evenPositionArray)
    let total = completeArray.reduce((a, b) => a + b, 0);
    let residue = total % 10;

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
