//fetch-multiple data

const API_URL = "https://jsonplaceholder.typicode.com/users";

const ids = [2, 5, 6, 8];

function getUser(id) {
    return fetch(`${API_URL}/${id}`).then((response) => response.json());
}

function getUsers() {
    const usersPromise = ids.map(id => getUser(id));
    // console.log(usersPromise);
    Promise.all(usersPromise);
}

getUsers().then((user) => console.log(user));