function display(persons, table) {
  persons.forEach((person) => {
    const list = document.createElement('li');
    const name = document.createElement('p');
    const score = document.createElement('span');

    list.className = 'score__list';
    name.innerText = `${person.name}:`;
    score.innerText = `${person.score}`;

    list.appendChild(name);
    list.appendChild(score);

    table.appendChild(list);
  });
}

export default display;