/**
 * Realiza una petición GET a una URL específica y devuelve una respuesta en formato JSON.
 * @async
 * @function Fetch
 * @returns {Promise<Object>} - Un objeto que representa la respuesta de la petición.
 * @throws {Error} - Lanza un error si la respuesta de la petición no es exitosa.
 */

export const Fetch = async () => {
  try {
    const request = await fetch(`http://localhost:4500/api/routes`, {
      method: 'get',
      mode: 'cors',
      cache: 'force-cache'
    });

    if (request.ok) {
      const response = await request;
      const jsonResponse = response.json ? await response.json() : [];
      return jsonResponse;
    }

    throw new Error('Network response was not ok.');
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error al cargar');
  }
};



/**
* Realiza una petición GET a una URL específica y devuelve una respuesta en formato JSON.
* @async
* @function FetchTodas
* @param {string} url - La URL de la que se quiere obtener la información.
* @returns {Promise<Object>} - Un objeto que representa la respuesta de la petición.
* @throws {Error} - Lanza un error si la respuesta de la petición no es exitosa.
*/

export const FetchTodas = async (url) => {
  try {
    const request = await fetch(url, {
      method: 'get',
      mode: 'cors',
      cache: 'force-cache'
    });

    if (request.ok) {
      const response = await request;
      const jsonResponse = response.json ? await response.json() : [];
      return jsonResponse;
    }

    throw new Error('Network response was not ok.');
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Error al cargar');
  }
};

