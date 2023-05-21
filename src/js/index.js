import Notiflix from 'notiflix';
import { fetchCountries } from "./fetchCountries.js";

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
    list.innerHTML = '';
    countryInfo.innerHTML = '';
    return;
  }

  fetchCountries(countryInput)
    .then(data => createMarkup(data))
    .catch(err => console.log(err));
}

function createMarkup(arr) {
  list.innerHTML = '';
  countryInfo.innerHTML = '';

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
