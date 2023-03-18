import React, { useState } from 'react';

import Iphone from '../../images/iphone.png';
import SearchBar from '../../components/SearchBar';
import { 
  Container, 
  ContentBox, 
  BoxPath, 
  Path,
  InnerBox,
  BoxProduct,
  Image,
  BoxInfo,
  Header,
  Title,
  Price,
  BuyButton,
  BoxDescription,
  TitleDescription,
  DescriptionText,
} from './styles';

const Details = () => {
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
      <ContentBox>
        <BoxPath>
        <Path>Teste>teste>teste>Teste</Path>
        </BoxPath>
        <InnerBox>
          <BoxProduct>
            <Image src={Iphone} />
            <BoxInfo>
              <Header>Nuevo - 234 vendidos</Header>
              <Title>Iphone novo</Title>
              <Price>$1998,00</Price>
              <BuyButton>Comprar</BuyButton>
            </BoxInfo>
          </BoxProduct>
          <BoxDescription>
            <TitleDescription>Descripción del producto</TitleDescription>
            <DescriptionText>
              BlablablaBlablablaBlablablaBlablabla
              BlablablaBlablablaBlablablaBlablablaBlablablaBlablabla
              BlablablaBlablablaBlablablaBlablablaBlablablaBlablabla
              BlablablaBlablablaBlablablaBlablablaBlablabla
            </DescriptionText>
          </BoxDescription>
        </InnerBox>
      </ContentBox>
  </Container>
  )
}

export default Details;