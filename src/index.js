// import './index.css';
import display from './modules/display.js';
import { getData, postData } from './modules/api.js';

const persons = [
  {
    name: 'John',
    score: '100',
  },
  {
    name: 'Mark',
    score: '20',
  },
  {
    name: 'Doe',
    score: '30',
  },
  {
    name: 'Jim',
    score: '40',
  },
  {
    name: 'Syd',
    score: '50',
  },
  {
    name: 'Pat',
    score: '60',
  },
];

const name = document.querySelector('.name');
const score = document.querySelector('.score');
const refresh = document.querySelector('.refresh');
const submit = document.querySelector('.submit');
const scoreList = document.querySelector('.scores__table');

display(persons, scoreList);

submit.addEventListener('click', () =>{
  if(name.value !== "" && name.value !== "") {
    const person = {
      user: name.value,
      score: score.value,
    }
    console.log(person);
    postData(person);
    name.value = '';
    score.value = '';
  }
})

refresh.addEventListener('click', async () => {
  const persons = await getData();
  console.log(persons);
  // display(persons, scoreList);
})