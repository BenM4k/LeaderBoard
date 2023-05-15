export async function getData(){
    try {
        const response = await fetch ('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8wPjCkmYYD4CyXa3rN0f/scores/');
        const data = await response.json;
        console.log (data);
        return data;
    } catch(error) {
        console.log (error);
    }
}

export function postData(data) {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8wPjCkmYYD4CyXa3rN0f/scores/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}