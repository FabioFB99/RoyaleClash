import './Gallery.css';

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

import GetCharacter from '../../components/getCharacter/getCharacter';
import { UserContext } from '../../context/UserContext';
import useDebounce from '../../hook/useDebonced';
import MainGallery from '../../layouts/MainGallery';

const Gallery = () => {
  const { clash, setClash } = useContext(UserContext);
  const [filterClash, setFilterClash] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const debouncedValue = useDebounce(filterClash, 1000);

  const getClash = async () => {
    const res = await axios.get('https://63f74109e40e087c958aaa97.mockapi.io/items');
    const data = res.data[0].items;
    setClash(data);
    setFilterClash(data);
    setLoaded(true);
  };

  useEffect(() => {
    getClash();
  }, []);

  const charactersFilter = (key) => {
    const filter = clash.filter(
      (item) =>
        item.name.toLowerCase().includes(key.toLowerCase()) || item.elixir.includes(key),
    );
    setFilterClash(filter);
  };
  return (
    <main>
      <div className="cl-input">
        <input
          type="text"
          placeholder="Search..."
          onChange={(ev) => charactersFilter(ev.target.value)}
        />
      </div>
      {loaded ? (
        <MainGallery>
          {debouncedValue.map((character) => (
            <GetCharacter character={character} key={character.id} />
          ))}
        </MainGallery>
      ) : (
        <div className="spinner">
          <img
            src="https://res.cloudinary.com/dqoiir5ii/image/upload/v1677260389/ClashRoyale/knightreduced_jgxrou.gif"
            alt="loading spinner"
          />
        </div>
      )}
    </main>
  );
};

export default Gallery;
