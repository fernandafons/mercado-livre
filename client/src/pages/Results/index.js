import React from 'react';
import Card from '../../components/Card';
import { useNavigate } from 'react-router-dom';


import { Container, BoxPath, Path } from './styles';

const Results = () => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    navigate('/Details');
  };

  return (
    <Container onClick={handleClick}>
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