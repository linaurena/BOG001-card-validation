import validator from './validator.js';
console.log(validator);

// Code to interact with the DOM.
const logo = document.getElementById('logo');
const onboardingView = document.getElementById('onboarding');
const btnStart = document.getElementById('start');
const cardView = document.getElementById('card-view');
const alertCV = document.getElementById('alert');

window.onload = function () {
  onboardingView.classList.remove('hidden');
  cardView.classList.add('hidden');
  alertCV.classList.add('hidden');
}

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

// Check it btn
const checkBtn = document.getElementById('check');

function alertOfValidation() {
  const isValid = validator.isValid(creditCardNumber.value)
  alertCV.classList.remove('hidden');
  const alertInfo = document.getElementById('root');
  let p = document.createElement('p');
  p.innerHTML = '';
  alertInfo.appendChild(p);

  if (isValid === true){
    p.innerHTML = `Your credit card is valid`;
  } else {
    p.innerHTML = `Your credit card is\'nt valid`;
  }
}

checkBtn.addEventListener('click', alertOfValidation);
