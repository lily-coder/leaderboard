const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const postData = async (URL, body) => {
  const response = await fetch(`${baseUrl}${URL}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response.json();
};

const getData = async (URL) => {
  const response = await fetch(`${baseUrl}${URL}`);
  return response.json();
};

export { postData };
export { getData };