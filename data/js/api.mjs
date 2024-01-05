// api.js
export async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error al obtener datos: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener datos:', error.message);
        throw error;
    }
}
