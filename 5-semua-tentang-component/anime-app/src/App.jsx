import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Main from './components/Main';
import animesData from './constants/animeData';
import Search, { NumResult } from './components/Navbar/Search';
import Box from './components/Box';
import AnimeList from './components/AnimeList';
import AnimeDetails from './components/AnimeDetails';

export default function App() {
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(animesData[0]);

  function handleSelectedAnime(id) {
    const newAnime = animesData.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }

  return (
    <>
      <Navbar>
        <Search>
          <NumResult animes={animes} />
        </Search>
      </Navbar>

      <Main>
        <Box>
          <AnimeList
            animes={animesData}
            onSelectedAnime={handleSelectedAnime}
          />
        </Box>
        <Box>
          <AnimeDetails anime={selectedAnime} />
        </Box>
      </Main>
    </>
  );
}
