# APIverse

This repository contains four distinct web applications, each developed to enhance specific web development skills. Below is an overview of each project and their features.

---

## Projects Overview

### 1. [Country Guide](#country-guide)

A dynamic country information app that fetches details via the REST Countries API.

### 2. [Dictionary App](#dictionary-app)

A dictionary application providing word meanings and pronunciation using the DictionaryAPI.

### 3. [Random Joke Generator](#random-joke-generator)

An app that generates random jokes fetched from JokeAPI with smooth fade effects.

### 4. [Zip Code Location Finder](#zip-code-location-finder)

A location finder tool that retrieves latitude and longitude from zip codes using the OpenWeatherMap API.

---

## Country Guide

This project allows users to search for country details by entering the name of a country.

### Demo

![Demo](./country-guide/demo.gif)

### Features

- Dynamic search with data from the [REST Countries API](https://restcountries.com/).
- Responsive design for various screen sizes.
- Error handling for invalid inputs or unavailable countries.

### Technologies Used

- **HTML**, **CSS (Sass)**, **JavaScript**
- **REST Countries API** for country data.

### Future Improvements

- Add search suggestions.
- Include filters (e.g., by region or population).
- Enable bookmarking of favorite countries.

---

## Dictionary App

This app fetches word meanings and pronunciations, providing users with a simple and intuitive dictionary tool.

### Demo

![Demo](./dictionary-app/demo.gif)

### Features

- Word search functionality.
- Pronunciation audio playback.
- Responsive design for all device sizes.

### Technologies Used

- **HTML**, **CSS**, **JavaScript**
- **DictionaryAPI** for word definitions and pronunciations.

### Future Improvements

- Support for more languages.
- Display synonyms and antonyms.
- Implement user accounts for saving favorite words.

---

## Random Joke Generator

Generates random jokes with a button click, featuring a fade-in effect for new jokes.

### Demo

![Demo](./random-joke-generator/demo.gif)

### Features

- Fetches random jokes from the [JokeAPI](https://v2.jokeapi.dev/).
- Smooth fade-in effects for displayed jokes.
- Responsive design for all screen sizes.

### Technologies Used

- **HTML**, **CSS**, **JavaScript**
- **JokeAPI** for joke data.

### Future Improvements

- Add more joke categories.
- Implement filters for joke types.
- Allow users to save favorite jokes.

---

## Zip Code Location Finder

Finds geographic location (latitude and longitude) based on zip code input, currently supporting Turkey.

### Demo

![Demo](./zip-code-location-finder/)

### Features

- Fetches location data from the [OpenWeatherMap API](https://openweathermap.org/api).
- Error handling for invalid inputs or API issues.
- Clean, minimalist design with SCSS styling.

### Technologies Used

- **HTML**, **SCSS**, **JavaScript**
- **OpenWeatherMap API** for location data.

### Future Improvements

- Expand support to other countries.
- Enhance error messages with more user-friendly feedback.

---

## How to Use

Each project can be run locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd <project-directory>
   ```
3. Open the respective `index.html` file in your browser to view and use the application.

---

## License

All projects in this repository are open-source and available under the MIT License.

---

## Contribution

Feel free to contribute by submitting issues or pull requests. Feedback and suggestions are always welcome!
