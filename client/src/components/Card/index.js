import React from 'react';
import { FcShipped } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import api from '../../services/axios';

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
  const freeShipping = item.free_shipping;
  const navigate = useNavigate();
  
  const handleClick = async() => {
    const request = await api.get(`/api/items/${item.id}`)
    const itemDetails = request.data;

    const data = {
      itemDetails: itemDetails,
    }

    navigate('/Details', {state: { data }});
  };
  return (
    <Container onClick={handleClick}>
      <Image src={item.picture} />
      <BoxDescription>
      <BoxHeader>
        <Price>
          $ {item.price.price}
        </Price>
        {freeShipping && 
        <FreeShipping>
          <FcShipped />
        </FreeShipping>
        }
      </BoxHeader>
      <ShortDescription>{item.title}</ShortDescription>
      </BoxDescription>
      <Location>{item.state_name}</Location>
    </Container>
    )
}

export default Card;