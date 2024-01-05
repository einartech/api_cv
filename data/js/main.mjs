// main.mjs
import { fetchData } from './api.mjs';
import { displayData } from './display.mjs';

document.addEventListener("DOMContentLoaded", function() {
    const itemsUrl = 'http://localhost:4000/api/items';
    const companiesUrl = 'http://localhost:4000/api/companies';

    fetchData(itemsUrl)
        .then(data => {
            // Llamamos a displayData con la estructura esperada para items
            displayData(data, 'data-items-container', 'items');
        })
        .catch(error => {
            // Manejar el error, si es necesario
        });

    fetchData(companiesUrl)
        .then(data => {
            // Llamamos a displayData con la estructura esperada para companies
            displayData(data, 'data-companies-container', 'companies');
        })
        .catch(error => {
            // Manejar el error, si es necesario
        });
});
