//fetch-text

const API_URL = "https://....";

const promise = fetch(API_URL)
    .then((response) => response.text())
    .then((data) => console.log(data));