
const uri = process.env.REACT_APP_URL; 

export const get = async (endpoint) => {
  const url = `${uri}/${endpoint}`;
console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the request: ', error);
    throw error;
  }
};

export const post = async (endpoint, data) => {
  const url = `${uri}/${endpoint}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),  
      
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('There was a problem with the request: ', error);
    throw error;
  }
};

export const put = async (endpoint, data) => {
  const url = `${uri}/${endpoint}`;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('There was a problem with the request: ', error);
    throw error;
  }
  
};

export const deleteData = async (endpoint) => {
    const url = `${uri}/${endpoint}`;
  
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('There was a problem with the request: ', error);
      throw error;
    }
}