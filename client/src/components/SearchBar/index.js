import React from 'react';

import { Container, Image, SearchInput, BoxIcon, Icon } from './styles';
import Logo from '../../images/logo.png';

const SearchBar = ({ handleSearch, setSearchWord, searchWord }) => {
  const handleClick = (e) => {
    setSearchWord(e);
    handleSearch();

    console.log('searchWord', searchWord);
  }
  
  return (
    <Container>
      <Image src={Logo} />
      <SearchInput placeholder='Nunca dejes de buscar'/>
      <BoxIcon onClick={event => handleClick(event.target.value)}>
        <Icon fontSize={'medium'}/>
      </BoxIcon>
    </Container>
  )
}

export default SearchBar;