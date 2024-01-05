// display.js
export function displayData(data, containerId) {
    const dataContainer = document.getElementById(containerId);

    if (!dataContainer) {
        console.error(`Elemento con ID ${containerId} no encontrado.`);
        return;
    }

    // Limpiar el contenedor antes de mostrar nuevos datos
    dataContainer.innerHTML = "";

    // Puedes personalizar esta parte según la estructura de tus datos
    dataContainer.innerHTML = "<h2>Datos de la API:</h2>";

    data.forEach(item => {
        const listItem = document.createElement('p');
        listItem.textContent = `ID: ${item._id}, Nombre: ${item.nombre}, Apellido: ${item.apellido}, Edad: ${item.edad}, Ciudad: ${item.ciudad}, Profesion: ${item.profesion}`;
        
        dataContainer.appendChild(listItem);
    });
}
