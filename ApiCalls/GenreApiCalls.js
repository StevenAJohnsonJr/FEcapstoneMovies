import { clientCredentials } from "../utils/client";

const endpoint = clientCredentials.databaseURL;

const getAllGenres = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/genre`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => resolve(Object.values(data)))
        .catch(reject);
});

export {
    getAllGenres,
}