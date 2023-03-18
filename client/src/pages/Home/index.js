import React, {useState} from 'react';
import SearchBar from '../../components/SearchBar';
import Results from '../Results';

import { Container, Text } from './styles';

const Home = () => {
  const [data, setData] = useState(null);
  const [searchWord, setSearchWord] = useState('');

  const handleSearch = async() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.author));
  };

  return (
  <Container>
    <SearchBar handleSearch={handleSearch} searchWord={searchWord} setSearchWord={setSearchWord}/>
    <Results />
  </Container>
  )
}

export default Home;