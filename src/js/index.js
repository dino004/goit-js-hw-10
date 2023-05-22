import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries.js';

var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
let countryInput;

const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  countryInput = evt.target.value.trim();

  if (!countryInput) {
    clearMarkup();
    return;
  }

  fetchCountries(countryInput)
    .then(data => {
      if (data.length === 0) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        clearMarkup();
      } else {
        createMarkup(data);
      }
    })
    .catch(err => {
      Notiflix.Notify.failure(err.message);
      clearMarkup();
    });
}

function clearMarkup() {
  list.innerHTML = '';
  countryInfo.innerHTML = '';
}

function createMarkup(arr) {
  clearMarkup();

  if (arr.length >= 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (arr.length > 1) {
    list.innerHTML = arr
      .map(
        ({
          name: { official },
          flags: { svg, alt },
        }) => `<li style="display:flex;align-items:center;">
<img width="30px" src="${svg}" alt="${alt}" style="margin-right:10px;max-height:20px">
<p>${official}</p>
</li>`
      )
      .join('');
  } else if (arr.length === 1) {
    countryInfo.innerHTML = arr
      .map(
        ({
          name: { official },
          capital,
          population,
          flags: { svg, alt },
          languages,
        }) => `<div>
<h2 style="display:flex;align-items:center;"><img width="50px" src="${svg}" alt="${alt}" style="margin-right:10px;">${official}</h2>
<h3>Capital: ${capital}</h3>
<p>Population: ${population}</p>
<p>Languages: ${Object.values(languages)}</p>
</div>`
      )
      .join('');
  }
}
