import React, {useState} from 'react';
import SearchBar from '../../components/SearchBar';
import Results from '../Results';
import axios from 'axios';

import { Container } from './styles';

const Home = () => {
  const [items, setItems] = useState(null);
  const [searchWord, setSearchWord] = useState('');

  const handleSearch = async() => {
    const resp = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchWord}`)
    const json = await resp.json()
    setItems(json.results);
    // console.log('json', json.results);

    // axios.get(`http://localhost:3001/search/${query}`)
    //   .then(response => {
    //     setItems(response.data.results);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }

  return (
  <Container>
    <SearchBar 
      handleSearch={handleSearch} 
      searchWord={searchWord} 
      setSearchWord={setSearchWord}
    />
    {items && <Results items={items}/>}
  </Container>
  )
}

export default Home;