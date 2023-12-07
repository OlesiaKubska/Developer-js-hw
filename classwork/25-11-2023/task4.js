//fetch-json

const API_URL = "https://jsonplaceholder.typicode.com/users";

function getUser(userId) {
    return fetch(`${API_URL}/${userId}`);
}

const user = getUser(5)
    .then((response) => response.json())
    .then((user) => console.log(user));

console.log(user);