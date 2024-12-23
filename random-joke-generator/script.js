const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url =
  "https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  //? Beginning of the function to get the joke
  jokeContainer.classList.remove("fade"); //? Removes the fade class(it is about visual effect)
  fetch(url) //? Send the HTTP request to API
    .then((data) => data.json()) //? Transform the response of API to JSON. Otherwise we can not do anything.
    .then((item) => {
      //? Start the then block to commit JSON data. We need this to add joke content to DOM.
      jokeContainer.textContent = `${item.joke}`; //? Write joke text to jokeContainer. We need this to show the joke.
      jokeContainer.classList.add("fade"); //? Adds the fade class.
    });
};

btn.addEventListener("click", getJoke); //? When we click the button, getJoke function works.

getJoke(); //? When we refresh the page or open the page, getJoke function works.
