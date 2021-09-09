/* eslint no-unused-vars: 0 no-undef: 0 */
import _ from 'lodash';
import './style.css';
import * as api from './api.js';

const displayScores = (scores = []) => {
  const list = document.querySelector('.list-names');
  list.innerHTML = '';
  scores.sort((a, b) => b.score - a.score);
  scores.forEach(({ user, score }) => {
    const p = document.createElement('p');
    p.classList.add('names');
    p.innerText = `${user}: ${score}`;
    list.appendChild(p);
  });
};

const nameOfGame = 'Moraa';
window.addEventListener('load', async () => {
  const id = await api.newGame(nameOfGame);
  const refresh = document.querySelector('.refresh');
  const form = document.querySelector('.add-score');

  const refreshScores = async () => {
    const scores = await api.getScores(id);
    displayScores(scores);
  };

  refresh.addEventListener('click', refreshScores);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const inputName = form.elements[0];
    const inputScore = form.elements[1];

    const data = {
      user: inputName.value,
      score: inputScore.value,
    };

    inputName.value = '';
    inputScore.value = '';
    await api.postScore(id, data);
    await refreshScores();
  });
});
