import React from 'react';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const itemDetail = location.state.data.itemDetails;

  return (
    <Container>
      <SearchBar />
      <ContentBox>
        <BoxPath>
        <Path>{`Teste > teste > teste > Teste`}</Path>
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