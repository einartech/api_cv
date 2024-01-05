// api.mjs

export function fetchData(url) {
    return fetch(url, {
        method: 'GET',
        mode: 'cors',
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error al obtener datos:', error);
        throw error;
    });
}
