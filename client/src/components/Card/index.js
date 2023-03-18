import React from 'react';
import { FcShipped } from 'react-icons/fc';

import Iphone from '../../images/iphone.png';
import { 
  Container, 
  Image, 
  BoxDescription, 
  BoxHeader, 
  Price, 
  FreeShipping, 
  ShortDescription, 
  Location 
} from './styles';

const Card = () => {
  return (
    <Container>
      <Image src={Iphone} />
      <BoxDescription>
      <BoxHeader>
        <Price>
          $1998,00
        </Price>
        <FreeShipping>
          <FcShipped />
        </FreeShipping>
      </BoxHeader>
      <ShortDescription>Iphone novo</ShortDescription>
      </BoxDescription>
      <Location>Mendonza</Location>
    </Container>
    )
}

export default Card;