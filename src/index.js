// import './index.css';
import display from './modules/display.js';
import { getData, postData } from './modules/api.js';

const name = document.querySelector('.name');
const score = document.querySelector('.score');
const refresh = document.querySelector('.refresh');
const submit = document.querySelector('.submit');
const scoreList = document.querySelector('.scores__table');
const result = document.querySelector('.api_result');

getData().then((data) => {
  data.result.forEach((data) => {
    display(data, scoreList);
  });
});

submit.addEventListener('click', () => {
  if (name.value !== '' && name.value !== '') {
    const person = {
      user: name.value,
      score: score.value,
    };
    postData(person, result);
    name.value = '';
    score.value = '';
  } else {
    result.style.display = 'block';
    result.innerText = 'Invalid Inputs';
  }
});

refresh.addEventListener('click', async () => {
  scoreList.innerHTML = '';
  getData().then((data) => {
    data.result.forEach((data) => {
      display(data, scoreList);
    });
  });
});