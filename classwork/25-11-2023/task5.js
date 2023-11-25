//fetch-error

const API_URL = "https://....";

function getUser(userId) {
    return fetch(`${API_URL}/${userId}`);
}

getUser(5)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Fetch ....")
        }
    })
    .then((user) => console.log("user", user))
    .catch((error) => console.log("error", error));

