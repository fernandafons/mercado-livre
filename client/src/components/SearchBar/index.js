import React from 'react';

import { Container, Image, SearchInput, BoxIcon, Icon } from './styles';
import Logo from '../../images/logo.png';

const SearchBar = ({ handleSearch, setSearchWord, searchWord }) => {
  // const handleClick = () => {
  //   console.log('searchWord', searchWord);
  //   // setSearchWord(event);
  //   handleSearch();
  // }
  
  return (
    <Container>
      <Image src={Logo} />
      <SearchInput 
        value={searchWord}
        onChange={(event) => setSearchWord(event.target.value)} 
        placeholder='Nunca dejes de buscar'
      />
      <BoxIcon onClick={handleSearch}>
        <Icon fontSize={'medium'}/>
      </BoxIcon>
    </Container>
  )
}

export default SearchBar;