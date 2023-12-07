//IIFE async-await

const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getUser(userId) {
    const response = await fetch(`${API_URL}/${userId}`);

    if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
    }

    return response.json();
}

(async function () {
    try {
        const user = await getUser(5);
        console.log(user);
    } catch (error) {
        console.log(error);
    }
    
})();

