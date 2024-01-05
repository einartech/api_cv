// main.js
import { fetchData } from './api.mjs';
import { displayData } from './display.mjs';

document.addEventListener("DOMContentLoaded", async function () {
    const itemsUrl = 'http://localhost:4000/api/items';

    try {
        const data = await fetchData(itemsUrl);
        displayData(data, 'data-container');
    } catch (error) {
        // Manejar el error, si es necesario
    }
});
