# Zip Code Location Finder

This is a simple web application that allows users to find the geographic location (latitude and longitude) based on a zip code input. The application makes use of the OpenWeatherMap API to fetch the location data.

**Currently, it is only valid for Turkey (TR), but it can be modified to support other countries.**

## Demo

![Demo GIF](demo.gif)

## Features

- Users can input a zip code and receive the latitude and longitude of the corresponding location.
- Error handling is included to manage invalid input or API issues.
- The app displays a failure message if there are issues fetching data.
- The user interface is styled with a clean, minimalist design using custom SCSS.

## Technologies Used

- **HTML**: For the structure of the web page.
- **SCSS**: For styling the page with variables, mixins, and flexbox.
- **JavaScript**: For the functionality, including fetching data from the OpenWeatherMap API and updating the DOM.
- **OpenWeatherMap API**: Used to retrieve location data based on the zip code.

## How to Use

1. Enter a valid 5-digit zip code in the input field.
2. Click the "Search" button to get the location information (latitude and longitude).
3. If an error occurs, a failure message will be shown, and you can click the "Try Again" button to reload the page.

## Files

- **index.html**: Contains the structure of the webpage.
- **style.scss**: Provides custom styling for the page using SCSS.
- **script.js**: Implements the logic for fetching and displaying location data.

## Setup

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Open the `index.html` file in your browser to view the application.

## License

This project is open-source and available under the MIT License.
