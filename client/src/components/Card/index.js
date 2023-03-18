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

const Card = ({ item }) => {
  console.log('item no card', item);
  const freeShipping = item.shipping.free_shipping;
  return (
    <Container>
      <Image src={item.thumbnail} />
      <BoxDescription>
      <BoxHeader>
        <Price>
          $ {item.price}
        </Price>
        {freeShipping && 
        <FreeShipping>
          <FcShipped />
        </FreeShipping>
        }
      </BoxHeader>
      <ShortDescription>{item.title}</ShortDescription>
      </BoxDescription>
      <Location>{item.address.state_name}</Location>
    </Container>
    )
}

export default Card;