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

    // Odd position
    for (let i = 0; i <= arrayReverse.length; i += 2) {
      oddPosition += i;
    }
    //console.log(oddPosition);

    // Even position
    for (let i = 1; i <= arrayReverse.length; i += 2) {
      evenPosition += i;
    }
    //console.log(evenPosition)

    let splitEvenPosition = evenPosition.split('');
    //console.log(splitEvenPosition)

    splitEvenPosition.forEach(function(number) {
      number = number * 2;

      // Numbers with 2 digits are reduced
      if (number > 9) {
       number = number.toString().split('');
       number = parseInt(number[0]) + parseInt(number[1]);
      }
      console.log(number)
    })

    console.log(splitEvenPosition)

  },


  maskify: (creditCardNumber) => {
    let arrayLength = creditCardNumber.length;
    console.log(arrayLength);
  }
};

export default validator;
