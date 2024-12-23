const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector("#result");
const sound = document.querySelector("#sound");
const btn = document.querySelector("#search-button");

btn.addEventListener("click", () => {
  let inpWord = document.querySelector("#inp-word").value.toLowerCase(); //? When user click the button, operation start to get the definition of the word.

  fetch(`${url}${inpWord}`) //? Send HTTP request to API
    .then((response) => response.json()) //? Transform response of API to JSON
    .then((data) => {
      result.innerHTML = `<div class="word">
          <h3>${inpWord}</h3>
          <button onclick="playSound()"><i class="fa-solid fa-volume-high"></i></button>
        </div>
        <div class="details">
          <p>${data[0].meanings[0].partOfSpeech}</p>
          <p>${data[0].phonetics[1].text}</p>
        </div>
        <p class="word-meaning">
          ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
          ${data[0].meanings[0].definitions[0].example || ""}
        </p>`;
      const audioUrl = `${data[0].phonetics[0].audio}`;
      sound.setAttribute("src", audioUrl);
    })
    .catch(() => {
      result.innerHTML = `<h3>Couldn't Find The Word</h3>`;
    });
});
function playSound() {
  sound.play();
}
