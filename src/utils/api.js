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



export const FetchClasica = async (url) => {
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




/* COMMENTS API */
export const getComments = async () => {
  return [
    {
      id: "1",
      body: "First comment",
      username: "Jack",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Second comment",
      username: "John",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "First comment first child",
      username: "Mary",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Second comment second child",
      username: "Carl",
      userId: "2",
      parentId: "2",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {

  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};