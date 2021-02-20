import validator from './validator.js';

console.log(validator);

// Code to interact with the DOM.

const logo = document.getElementById('logo');
const onboardingView = document.getElementById('onboarding');
const btnStart = document.getElementById('start');
const cardView = document.getElementById('card-view');

btnStart.addEventListener('click', function(){
  onboardingView.classList.add('hidden');
  cardView.classList.remove('hidden');
})

logo.addEventListener('click', function(){
  cardView.classList.add('hidden');
  onboardingView.classList.remove('hidden');
})

// Input

const creditCardNumber = document.getElementById('input');

creditCardNumber.addEventListener('keyup', (e) => {
  console.log(e)
})

// Message alert

const validAlert = document.getElementById('validAlert');
const invalidAlert = document.getElementById('invalidAlert');
////////// Here will be a function with modal

// Check it btn

const checkBtn = document.getElementById('check');

function alertOfValidation() {
  const isValid = validator.isValid(creditCardNumber.value)

  if (isValid === true){
    alert('Your credit card is valid');
  } else {
    alert('Your credit card is not valid');
  }
}

checkBtn.addEventListener('click', alertOfValidation);
