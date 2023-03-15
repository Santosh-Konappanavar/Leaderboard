import './index.css';
import addscore from './module/addscore.js';
import display from './module/scores.js';

document.querySelector('.addform').addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  await addscore(user, score);
  e.target.reset();
});

document.getElementById('refresh').addEventListener('click', display);
display();
