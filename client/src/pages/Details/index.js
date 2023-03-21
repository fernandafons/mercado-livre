import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import SearchBar from '../../components/SearchBar';
import { StateContext } from '../../hooks/Context';

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
  const { searchWord, setSearchWord } = useContext(StateContext);
  const location = useLocation();
  const itemDetail = location.state.data.itemDetails;
  console.log('itemDetail', itemDetail);

  const handleSearch = async() => {
    const resp = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchWord}`)
    const json = await resp.json()
    // setItems(json.results);
  }

  return (
    <Container>
      <SearchBar handleSearch={handleSearch} searchWord={searchWord} setSearchWord={setSearchWord}/>
      <ContentBox>
        <BoxPath>
        <Path>{`Teste>teste>teste>Teste`}</Path>
        </BoxPath>
        <InnerBox>
          <BoxProduct>
            <Image src={itemDetail.picture} />
            <BoxInfo>
              <Header>{itemDetail.condition}- {itemDetail.sold_quantity} vendidos</Header>
              <Title>{itemDetail.item.title}</Title>
              <Price>${itemDetail.item.price}</Price>
              <BuyButton>Comprar</BuyButton>
            </BoxInfo>
          </BoxProduct>
          <BoxDescription>
            <TitleDescription>Descripción del producto</TitleDescription>
            <DescriptionText>{itemDetail.description}</DescriptionText>
          </BoxDescription>
        </InnerBox>
      </ContentBox>
  </Container>
  )
}

export default Details;