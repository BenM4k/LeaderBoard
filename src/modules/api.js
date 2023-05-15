export const getData = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8wPjCkmYYD4CyXa3rN0f/scores/');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const postData = async (data, message) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8wPjCkmYYD4CyXa3rN0f/scores/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      message.style.display = 'block';
      message.innerText = json.result;
    })
    .then((result) => result);
};
