# Forkify App

 My personal version of the "Forkify App" project from "The Complete JavaScript Course" - A Udemy Course by Jonas Schmedtmann

## Description

Forkify App is a vanilla JavaScript project focusing on the MVC architecture. This project is built with the following technologies:

- [HTML](https://www.w3schools.com/html/)
- [SCSS](https://sass-lang.com/)
- [JavaScript](https://www.javascript.com/)
- [NPM](https://www.npmjs.com/)
- [Parcel](https://parceljs.org/)

The Forkify application fetches and displays recipe food data from the [Forkify API](https://forkify-api.herokuapp.com/v2). Users can search for a variety of recipes and then save them to a "bookmarks" section by means of their browser local storage. Moreover, users can easily increase or decrease the number of servings for each recipe and can also access additional related information.

### Installation

1. Make sure to have the latest version of NPM installed

    ```sh
    npm install npm@latest -g
    ```

2. Clone the repo

    ```sh
    git clone https://github.com/MattiaPolli93/forkify-app.git
    ```

3. Install NPM packages

    ```sh
    npm install
    ```

4. Enter your API key (which you can generate for free [here](https://forkify-api.herokuapp.com/v2), then paste it in the `config.js` file

    ```sh
    const KEY = "ENTER YOUR API KEY";
    ```

5. Open a new terminal in the root folder and run

    ```sh
    npm run start
    ```

### Acknowledgements

- **Jonas Schmedtmann**, at [CodingHeroes.io](https://codingheroes.io/resources/), for making this course available on [Udemy](https://www.udemy.com/course/the-complete-javascript-course/)
