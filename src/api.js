import { postData, getData } from './fetchAndSend.js';
import parseId from './parseId.js';

const newGame = async (name) => {
  const { result } = await postData('games', { name });
  const id = parseId(result);
  return id;
};

const getScores = async (id) => {
  const { result } = await getData(`games/${id}/scores/`);
  return result;
};

const postScore = async (id, data) => {
  const { result } = await postData(`games/${id}/scores/`, data);
  return result;
};

export { newGame, getScores, postScore };