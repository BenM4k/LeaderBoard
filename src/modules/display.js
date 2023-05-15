async function display(person, table) {
  const list = document.createElement('li');
  const name = document.createElement('p');
  const score = document.createElement('span');

  list.className = 'score__list';
  name.innerText = `${person.user}:`;
  score.innerText = `${person.score}`;

  list.appendChild(name);
  list.appendChild(score);

  table.appendChild(list);
}

export default display;