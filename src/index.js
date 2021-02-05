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

// Check it btn

const checkBtn = document.getElementById('check');

checkBtn.addEventListener('click', function(){
  console.log('yeee');
})
