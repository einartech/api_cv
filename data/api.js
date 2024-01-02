// api.js

function fetchData(url) {
    return fetch(url, {
        method: 'GET',
        mode: 'cors',
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error al obtener datos:', error);
        throw error;  // Propaga el error para que pueda ser manejado por el código que llama a fetchData
    });
}
