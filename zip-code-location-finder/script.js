const input = document.querySelector("#input");
const button = document.querySelector("#button");
const title = document.querySelector("#title");
const lat = document.querySelector("#text1");
const lon = document.querySelector("#text2");
const fail = document.querySelector("#fail");
const container = document.querySelector("#container");
const restartButton = document.querySelector("#restartButton");

const getData = async (zipCode) => {
  if (!zipCode) {
    alert("Please enter a valid zip code");
    return;
  }

  const url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},TR&appid=28353efa8aab0e4ddd54735346931b0e`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Ooops We Have Some Problems");
    const data = await res.json();
    showOn(data);
  } catch (error) {
    console.error(error.message);
    fail.style.display = "block";
    container.style.display = "none";
  }
};

const showOn = (location) => {
  title.textContent = `${location.name}`;
  lat.innerHTML = `Latitude: ${location.lat}`;
  lon.innerHTML = `Longitude: ${location.lon}`;
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  const zipCode = input.value;
  if (isNaN(Number(zipCode))) {
    alert("Zip code must consist of numbers");
    return;
  } else if (zipCode.length !== 5) {
    alert("Zip code must be 5 digits");
    return;
  } else {
    getData(zipCode);
  }
  input.value = "";
});

restartButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.reload();
});
