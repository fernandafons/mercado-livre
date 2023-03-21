import React, {useState} from 'react';
import SearchBar from '../../components/SearchBar';
import Results from '../Results';
import api from '../../services/axios';

import { Container } from './styles';

const Home = () => {
  const [items, setItems] = useState(null);
  const [searchWord, setSearchWord] = useState('');

  const handleSearch = async() => {
    const resp = await api.get(`/api/items?q=${searchWord}`)
    setItems(resp.data);
  }

  return (
  <Container>
    <SearchBar 
      handleSearch={handleSearch} 
      searchWord={searchWord} 
      setSearchWord={setSearchWord}
    />
    {items && <Results items={items} setItems={setItems}/>}
  </Container>
  )
}

export default Home;