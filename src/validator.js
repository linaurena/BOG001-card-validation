// Create a method: It's a property of type function.
// isValid = returns Boolean response
// maskify = returns a string reponse with "#"

const validator = {
  isValid: (creditCardNumber) => {
    const arrayReverse = creditCardNumber.split('').reverse();
    console.log(arrayReverse);

    // Position variables
    let oddPosition = '';  //[0]
    let evenPosition = ''; //[1]

    // Create an array with odd position array
    for (let i = 0; i <= arrayReverse.length; i += 2) {
      oddPosition += i
    }
    console.log(oddPosition);

    // Even position
    for (let i = 1; i <= arrayReverse.length; i += 2) {
      evenPosition += i;
    }
    console.log(evenPosition)


    let multiplyEvenPosition = evenPosition.forEach * 2
    console.log(multiplyEvenPosition)

  },


  maskify: (creditCardNumber) => {
    let arrayLength = creditCardNumber.length;
    console.log(arrayLength);
  }
};

export default validator;
