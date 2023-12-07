//fetch-text

const API_URL = "https://example.com";

const promise = fetch(API_URL)
    .then((response) => response.text())
    .then((data) => console.log(data));