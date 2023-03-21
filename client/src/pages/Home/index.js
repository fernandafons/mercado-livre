import React, {useContext} from 'react';
import { StateContext } from '../../hooks/Context';
import SearchBar from '../../components/SearchBar';
import Results from '../Results';

import { Container } from './styles';

const Home = () => {
  const { items } = useContext(StateContext);

  return (
  <Container>
    <SearchBar />
    {items && <Results items={items} />}
  </Container>
  )
}

export default Home;