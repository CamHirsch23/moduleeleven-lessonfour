import axios from 'axios';
import md5 from 'js-md5';

const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
});

const generateHash = (ts) => {
  return md5(ts + privateKey + publicKey);
};

export const fetchCharacters = async () => {
  const ts = new Date().getTime();
  const hash = generateHash(ts);

  try {
    const response = await api.get('/characters', {
      params: {
        ts,
        apikey: publicKey,
        hash,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};