async function fetchCountries(nameCity) {
  if (nameCity.length > 0) {
    const url = `https://restcountries.com/v3.1/name/${nameCity}?name,capital,flags,population,languages`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return await response.json();
  }
}

export { fetchCountries };
