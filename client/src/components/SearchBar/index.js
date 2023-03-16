import React from 'react';

import { Container, Image, SearchInput, BoxIcon, Icon } from './styles';
import Logo from '../../images/logo.png';

const SearchBar = () => {
  return (
    <Container>
      <Image src={Logo} />
      <SearchInput placeholder='Nunca dejes de buscar'/>
      <BoxIcon>
        <Icon fontSize={'medium'}/>
      </BoxIcon>
    </Container>
  )
}

export default SearchBar;