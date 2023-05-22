import Notiflix from 'notiflix';

export function fetchCountries(country) {
  const BASE_URL = 'https://restcountries.com/v3.1';

  return fetch(`${BASE_URL}/name/${country}`).then(resp => {
    if (!resp.ok) {
      throw new Error(
        resp(
          Notiflix.Notify.failure('Oops, there is no country with that name')
        )
      );
    }
    return resp.json();
  });
}
