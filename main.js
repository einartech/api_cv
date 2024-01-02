
document.addEventListener("DOMContentLoaded", function() {
    // Realizar solicitud a la API
    fetch('http://localhost:4000/api/items', {
        method: 'GET',
        mode: 'cors',
    })
        .then(response => response.json())
        .then(data => {
            // Procesar y mostrar los datos en el contenedor
            displayData(data);
        })
        .catch(error => console.error('Error al obtener datos:', error));

    function displayData(data) {
        // Actualizar el contenido del contenedor en el HTML
        const dataContainer = document.getElementById('data-container');

        dataContainer.innerHTML = "<h2>Datos de la API:</h2>";

        // Puedes personalizar esta parte según la estructura de tus datos
        data.forEach(item => {
            const listItem = document.createElement('p');
            listItem.textContent = `ID: ${item._id}, Nombre: ${item.nombre}, Edad: ${item.edad}`;
            dataContainer.appendChild(listItem);
        });
    }
});