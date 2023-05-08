import './getCharacter.css';

import React from 'react';

const GetCharacter = ({ character }) => {
  return (
    <figure className="cr-figure">
      <img src={character.iconUrls.medium} alt={character.name} />
      <p className="cr-p1">{character.name}</p>
      <p className="cr-p2">Level {JSON.stringify(character.maxLevel)}</p>
      <p className="cr-p3">Elixir cost {character.elixir}</p>
    </figure>
  );
};

export default GetCharacter;
