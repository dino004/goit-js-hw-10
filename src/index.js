import './css/styles.css';
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
let coutryInput;

const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  coutryInput = evt.target.value;
  console.log(coutryInput);

  fetchCountries(coutryInput)
    .then(data => (list.innerHTML = creatMarkup(data)))
    .catch(err => console.log(err));
}

function fetchCountries(coutry) {
  const BASE_URL = 'https://restcountries.com/v3.1';
}

return fetch(`${BASE_URL}/alpha/${country}.json`).then(resp => {
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }

  return resp.json();
});

function creatMarkup(arr) {
  return arr.map(({ name: { official } }) => `<li>${official}</li>`).join('');
}
