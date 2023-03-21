import React, { useContext } from 'react';
import Card from '../../components/Card';
import { StateContext } from '../../hooks/Context';


import { Container, BoxPath, Path } from './styles';

const Results = () => {

  const { items, setItems } = useContext(StateContext);

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