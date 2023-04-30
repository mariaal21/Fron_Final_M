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
  


  export const FetchBoulder = async () => {
    try {
      const request = await fetch(`http://localhost:4500/api/routes/boulder`, {
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
  


  export const FetchClasica = async () => {
    try {
      const request = await fetch(`http://localhost:4500/api/routes/clasica`, {
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
  




  export const FetchDeportiva = async () => {
    try {
      const request = await fetch(`http://localhost:4500/api/routes/deportiva`, {
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
  