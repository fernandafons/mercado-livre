import React, { useContext } from 'react';
import { StateContext } from '../../hooks/Context';
import api from '../../services/axios';

import { Container, Image, SearchInput, BoxIcon, Icon } from './styles';
import Logo from '../../images/logo.png';

const SearchBar = () => {
  const { searchWord, setSearchWord, setItems } = useContext(StateContext);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  const handleSearch = async() => {
    const resp = await api.get(`/api/items?q=${searchWord}`)
    setItems(resp.data);
  }
  
  return (
    <Container>
      <Image src={Logo} />
      <SearchInput 
        value={searchWord}
        onChange={(event) => setSearchWord(event.target.value)} 
        placeholder='Nunca dejes de buscar'
        type="text"
        onKeyDown={handleKeyDown}
      />
      <BoxIcon onClick={handleSearch}>
        <Icon fontSize={'medium'}/>
      </BoxIcon>
    </Container>
  )
}

export default SearchBar;