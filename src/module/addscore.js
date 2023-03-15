const postapi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/usdPzo4JD68WLDEYoQ2d/scores';

const addscores = async (user, score) => {
  const response = await fetch(postapi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  return response.json();
};
export default addscores;