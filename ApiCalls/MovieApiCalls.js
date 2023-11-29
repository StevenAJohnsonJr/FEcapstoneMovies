import { clientCredentials } from "../utils/client";

const endpoint = clientCredentials.databaseURL;

const createMovie = (payload) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/movie`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then(async (res) => {
            let data;
            if (res.ok) {
                data = await res.json();
                resolve(data);
            }
        })
        .catch(reject);
});

const updateMovie = (payload) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/movie/${payload.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then(async (res) => {
            let data;
            if (res.ok) {
                data = await res.json();
                resolve(data);
            }
        })
        .catch(reject);
});

// const updatemovie = (Id, payload) => new Promise((resolve, reject) => {
//   fetch(`https://localhost:7011/api/movies/${Id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

const getrandomMovie = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/randommovie`, {
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

const getAllMovies = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/movie`, {
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

const getAllComedyMovies = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/movie1`, {
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

const getAllRomComMovies = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/movie2`, {
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

const getAllMTMovies = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/movie3`, {
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

const getAllActionMovies = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/movie4`, {
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

const getAllHorrorMovies = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/movie5`, {
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

const getAllHolidayMovies = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/movie6`, {
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

const getAllFamilyMovies = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/movie7`, {
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

const getAllSciFiMovies = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/movie8`, {
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

const getAllWesternMovies = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/movie9`, {
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

const getAllDocMovies = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/movie10`, {
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

const getAllDramaMovies = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/movie11`, {
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

const deleteMovie = (id) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/moviebyID/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((data) => resolve(data))
        .catch(reject);
});

const getMoviesbyGenreID = (genreid) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/movie/${genreid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (!response.ok) {
                reject(`Network response was not ok: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            resolve(data);
        })
        .catch((error) => {
            reject(error);
        });
});

const getMoviesById = (id) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/movie/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (!response.ok) {
                reject(`Network response was not ok: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            resolve(data);
        })
        .catch((error) => {
            reject(error);
        });
});

const getMoviesbyDirectorId = (directorid) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/movie/${directorid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (!response.ok) {
                reject(`Network response was not ok: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            resolve(data);
        })
        .catch((error) => {
            reject(error);
        });
});

//   const getmoviesById2 = (id) => new Promise((resolve, reject) => {
//     fetch(`${endpoint}/apimoviesbyID/${id}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     })
//       .then((response) => resolve(response.json()))
//       // .then((data) => resolve(Object.values(data)))
//       .catch(reject);
//   });  

const checkUser = (uid) => new Promise((resolve, reject) => {
    fetch(`https://localhost:7100/checkuser/${uid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => resolve(Object.values(data)))
        .catch(reject);
});

export {
    getAllDramaMovies,
    getAllDocMovies,
    getAllWesternMovies,
    getAllSciFiMovies,
    getAllFamilyMovies,
    getAllHolidayMovies,
    getAllHorrorMovies,
    getAllMTMovies,
    getAllRomComMovies,
    getAllComedyMovies,
    getAllActionMovies,
    updateMovie,
    createMovie,
    getMoviesbyDirectorId,
    getAllMovies,
    deleteMovie,
    getMoviesById,
    getMoviesbyGenreID,
    checkUser,
    getrandomMovie,
};