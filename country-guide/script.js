const input = document.querySelector("#input");
const button = document.querySelector("#button");
const infoContainer = document.querySelector("#infoContainer");
const image = document.querySelector("#img");
const title = document.querySelector("#title");
const capital = document.querySelector("#capital");
const continent = document.querySelector("#continent");
const population = document.querySelector("#population");
const currency = document.querySelector("#currency");
const languages = document.querySelector("#languages");

button.addEventListener("click", (e) => {
  e.preventDefault();
  infoContainer.style.display = "block";
  const countryName = input.value.trim().toLowerCase();
  if (!countryName) {
    alert("Please enter a country name");
    return;
  } else if (/\d/.test(countryName)) {
    alert("Country name cannot contain numbers. Please enter a valid name.");
    return;
  }
  getData(countryName);
  input.value = "";
});

const showOn = (country) => {
  title.textContent = `${country.name.common}`;
  capital.textContent = `Capital: ${country.capital}`;
  continent.textContent = `Continent: ${country.continents}`;
  population.textContent = `Population: ${country.population}`;

  const flag = `${country.flags.png}`;
  image.setAttribute("src", flag);

  const currencies = country.currencies;
  const currencyKeys = Object.keys(currencies);
  const currencyList = currencyKeys
    .map((key) => `${currencies[key].name} (${currencies[key].symbol})`)
    .join(", ");
  currency.textContent = `Currency: ${currencyList}`;

  const languagesList = Object.values(country.languages).join(", ");
  languages.textContent = `Languages: ${languagesList}`;
};

const getData = async (countryName) => {
  if (!countryName) {
    alert("Country Has Not Found");
    return;
  }

  const url = `https://restcountries.com/v3.1/name/${countryName}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Ooops We Have Some Problems");
    const data = await res.json();
    console.log(data);
    showOn(data[0]);
  } catch (error) {
    alert("Country not found. Please try again.");
    console.error(error.message);
  }
};
