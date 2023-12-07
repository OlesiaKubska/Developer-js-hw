//multiple async-await

const API_URL = "https://jsonplaceholder.typicode.com/users";

const ids = [2, 5, 6, 8];

async function getUser(id) {
    const response = await fetch(`${API_URL}/${id}`);
    
    if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
    }

    return response.json();
}

function getUsers() {
    const usersPromise = ids.map(id => getUser(id));
    Promise.all(usersPromise);
}

(async function iife() {
    try {
        const users = await getUsers(ids);
        users.forEach((user) => console.log(user.email));
    } catch (error) {
        console.error("There was an error", error);
    }
})();