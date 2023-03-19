import React from 'react';
import Card from '../../components/Card';


import { Container, BoxPath, Path } from './styles';

const Results = ({ items, setItems }) => {
  
  return (
    <Container>
      <BoxPath>
      <Path>Teste>teste>teste>Teste</Path>
      </BoxPath>
      {items.map((item) => 
      <Card key={item.id} item={item} setItems={setItems} />
      )}
    </Container>
  )
}

export default Results;