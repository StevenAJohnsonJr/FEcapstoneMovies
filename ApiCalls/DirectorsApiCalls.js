import { clientCredentials } from "../utils/client";

const endpoint = clientCredentials.databaseURL;

const createDirector = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/director`, {
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

const updateDirector = (Id, payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/director${Id}`, {
    method: 'PATCH',
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

// const updateItem = (Id, payload) => new Promise((resolve, reject) => {
//   fetch(`https://localhost:7011/api/Items/${Id}`, {
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



const getAllDirector = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/director`, {
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

const deleteDirector = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/director/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

//   const getMovieObjByDirectorId = (directorid) => new Promise((resolve, reject) => {
//     fetch(`${endpoint}/MovieObjsbyDirectorId2/${directorid}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           reject(`Network response was not ok: ${response.status} ${response.statusText}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });

const getDirectorById = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/director/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    // .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getMovieObjByDirectorId = (directorid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/MoviesbyDirectorId2/${directorid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    // .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getDirectorById,
  getMovieObjByDirectorId,
  deleteDirector,
  getAllDirector,
  createDirector,
  updateDirector,
};