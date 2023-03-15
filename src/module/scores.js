const getApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/usdPzo4JD68WLDEYoQ2d/scores';
const getscore = async () => {
  const res = await fetch(getApi);
  const { result } = await res.json();
  return result.sort((a, b) => b.score - a.score);
};

const display = async () => {
  const scorecontainer = document.getElementById('scorelist');
  scorecontainer.innerHTML = '';

  const scores = await getscore();
  scores.forEach(({ user, score }) => {
    const lists = document.createElement('li');
    lists.textContent = `${user}: ${score}`;
    scorecontainer.append(lists);
  });
};
export default display;