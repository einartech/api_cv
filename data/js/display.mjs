// display.mjs

export function displayData(data, containerId, dataType) {
    const dataContainer = document.getElementById(containerId);

    if (!dataContainer) {
        console.error(`Elemento con ID ${containerId} no encontrado.`);
        return;
    }

    // Limpiar el contenedor antes de mostrar nuevos datos
    dataContainer.innerHTML = "";

    if (dataType === 'items') {
        // Lógica específica para la estructura de items
        dataContainer.innerHTML = "<h2>Datos de la API (Items):</h2>";

        data.forEach(item => {
            const itemId = item._id.$oid || item._id; // Manejar la diferencia en la estructura _id
            const listItem = document.createElement('p');
            listItem.textContent = `ID: ${itemId}, Nombre: ${item.nombre}, Edad: ${item.edad}`;
            dataContainer.appendChild(listItem);
        });
    } else if (dataType === 'companies') {
        // Lógica específica para la estructura de companies
        dataContainer.innerHTML = "<h2>Datos de la API (Companies):</h2>";

        data.forEach(company => {
            const companyId = company._id.$oid || company._id; // Manejar la diferencia en la estructura _id
            const listItem = document.createElement('p');
            listItem.textContent = `ID: ${companyId}, Nombre: ${company.name}, Ciudad: ${company.city}, Info: ${company.info}`;
            dataContainer.appendChild(listItem);
        });
    } else {
        console.error(`Tipo de datos no válido: ${dataType}`);
    }
}
