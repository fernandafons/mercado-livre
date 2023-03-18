import React from 'react';
import Card from '../../components/Card';
import { useNavigate } from 'react-router-dom';


import { Container, BoxPath, Path } from './styles';

const Results = ({ items }) => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    navigate('/Details');
  };

  console.log('items', items);
  
  return (
    <Container onClick={handleClick}>
      <BoxPath>
      <Path>Teste>teste>teste>Teste</Path>
      </BoxPath>
      {items.map((item) => 
      <Card key={item.id} item={item}/>
      )}
    </Container>
  )
}

export default Results;