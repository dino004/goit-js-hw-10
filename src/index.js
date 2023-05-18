import './css/styles.css';
import Notiflix from 'notiflix';

var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
let coutryInput;

const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  coutryInput = evt.target.value;

  if (!coutryInput) {
    list.innerHTML = '';
  }

  fetchCountries(coutryInput.trim())
    .then(data => creatMarkup(data))
    .catch(err => console.log(err));
}

function fetchCountries(country) {
  const BASE_URL = 'https://restcountries.com/v3.1';

  return fetch(`${BASE_URL}/name/${country}`).then(resp => {
    if (!resp.ok) {
      throw new Error(Notiflix.Notify.failure('Oops, there is no country with that name'));
    }

    return resp.json();
  });
}
function creatMarkup(arr) {
  if (arr.length >= 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (arr.length >= 2) {
    return (list.innerHTML = arr
      .map(
        ({
          name: { official },
          flags: { svg, alt },
        }) => `<li style="display:flex;align-items:center;">
<img width="30px" src="${svg}" alt="${alt}" style="margin-right:10px;max-height:20px">
<p> ${official}</p>
</li>`
      )
      .join(''));
  } else {
    return (list.innerHTML = arr
      .map(
        ({
          name: { official },
          capital,
          population,
          flags: { svg, alt },
          languages,
        }) => `<li>
<h2 style="display:flex;align-items:center;"><img width="50px" src="${svg}" alt="${alt}" style="margin-right:10px;"> ${official}</h2>
<h3>Capital: ${capital}</h3>
<p>Population: ${population}</p>
<p>Languages: ${Object.values(languages)}</p>
</li>`
      )
      .join(''));
  }
}
