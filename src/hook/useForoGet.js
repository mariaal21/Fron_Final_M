/**
 * Realiza una solicitud de red para obtener datos del servidor utilizando el método POST.
 *
 * @async
 * @function useForoGet
 * @param {string} url - La URL a la que se enviará la solicitud.
 * @param {Object} data - Los datos que se enviarán en el cuerpo de la solicitud en formato JSON.
 * @throws {Error} Error al cargar.
 * @returns {Promise} Una promesa que se resuelve con los datos de respuesta en formato JSON o se rechaza con un error.
 */


export const useForoGet = async (url) => {
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