/**
 * Realiza una solicitud de red para obtener datos del servidor utilizando el método POST.
 *
 * @async
 * @function useCalendarFetch
 * @param {string} url - La URL a la que se enviará la solicitud.
 * @param {Object} data - Los datos que se enviarán en el cuerpo de la solicitud en formato JSON.
 * @throws {Error} Error al cargar.
 * @returns {Promise} Una promesa que se resuelve con los datos de respuesta en formato JSON o se rechaza con un error.
 */


export const useCalendarFetch = async (url, data) => {
    try {
      const request = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'force-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
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
  