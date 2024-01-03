// display.js

function displayData(data, containerId) {
    const dataContainer = document.getElementById(containerId);

    if (!dataContainer) {
        console.error(`Elemento con ID ${containerId} no encontrado.`);
        return;
    }

    dataContainer.innerHTML = "<h2>Datos de la API:</h2>";

    // Puedes personalizar esta parte según la estructura de tus datos
    data.forEach(item => {
        const listItem = document.createElement('p');
        listItem.textContent = `ID: ${item._id}, Nombre: ${item.nombre}, Edad: ${item.edad}`;
        dataContainer.appendChild(listItem);
    });
}