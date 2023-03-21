import React, { useContext } from 'react';
import Card from '../../components/Card';
import { StateContext } from '../../hooks/Context';
import SearchBar from '../../components/SearchBar';


import { Container, Content, BoxPath, Path } from './styles';

const Results = () => {

  const { items, setItems } = useContext(StateContext);

  return (
    <Container>
      <SearchBar />
      <Content>
        <BoxPath>
        <Path>{`Teste > teste > teste > Teste`}</Path>
        </BoxPath>
        {items.map((item) => 
        <Card key={item.id} item={item} setItems={setItems} />
        )}
      </Content>
    </Container>
  )
}

export default Results;