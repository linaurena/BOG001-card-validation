// Create a method: It's a property of type function.
// isValid = returns Boolean response
// maskify = returns a string reponse with "#"

const validator = {
  isValid: (creditCardNumber) => {
    console.log(creditCardNumber);
  },

  maskify: (creditCardNumber) => {
    let arrayLength = creditCardNumber.length;
    console.log(arrayLength);
  }
};

export default validator;
