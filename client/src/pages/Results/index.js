import React from 'react';
import Card from '../../components/Card';

import { Container, BoxPath, Path } from './styles';

const Results = () => {
  return (
    <Container>
      <BoxPath>
      <Path>Teste>teste>teste>Teste</Path>
      </BoxPath>
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  )
}

export default Results;