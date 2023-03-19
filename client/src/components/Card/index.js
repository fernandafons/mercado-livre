import React, { useState } from 'react';
import { FcShipped } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

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

const Card = ({ item, setItems }) => {
  // console.log('item.id', item.id);
  const freeShipping = item.shipping.free_shipping;
  const id = item.id;
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  
  const handleClick = async() => {
    const request = await fetch(`https://api.mercadolibre.com/items/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 8547864014068284'
      }
    })
    const response = await request.json();
    console.log('response', response);
    // setDescription(resp.plain_text);
    // console.log('description', description);
    
    const req = await fetch(`https://api.mercadolibre.com/items/${id}/description`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 8547864014068284'
      }
    })
    const resp = await req.json();
    console.log('resp', resp.plain_text);
    setDescription(resp.plain_text);
    console.log('description', description);

    navigate('/Details', item, resp, setItems);
  };
  return (
    <Container onClick={handleClick}>
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