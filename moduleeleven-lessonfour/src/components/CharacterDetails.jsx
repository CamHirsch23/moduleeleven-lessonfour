// src/components/CharacterDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      const ts = new Date().getTime();
      const hash = '736a69b88fb0bc45f6b013c6a3046a86'; // Static hash key

      try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}`, {
          params: {
            ts,
            apikey: publicKey,
            hash,
          },
        });
        setCharacter(response.data.data.results[0]);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
    </div>
  );
};

export default CharacterDetails;