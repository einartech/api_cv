// main.js

document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'http://localhost:4000/api/items';

    fetchData(apiUrl)
        .then(data => {
            displayData(data, 'data-container');
        })
        .catch(error => {
            // Manejar el error, si es necesario
        });
});