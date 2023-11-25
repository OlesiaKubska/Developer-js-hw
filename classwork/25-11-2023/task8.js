//multiple async-await

const API_URL = "https://....";

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

//......