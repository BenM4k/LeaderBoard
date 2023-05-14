import './index.css';
import display from './modules/display.js';

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
]

const scoreList = document.querySelector('.scores__table');

display(persons, scoreList);