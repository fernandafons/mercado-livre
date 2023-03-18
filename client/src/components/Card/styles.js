import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.white};
  width: 80%;
  height: 150px;
  display: flex;
  padding: 5px;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 150px;
`;

export const BoxDescription = styled.div`
  width: 55%;
  padding: 20px;
`;

export const BoxHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Price = styled.text`
  font-size: ${props => props.theme.sizes.big};
`;

export const FreeShipping = styled.div`
  align-items: flex-end;
  display: flex;
  margin: 0 0 3px 10px;
`;

export const ShortDescription = styled.text`
  font-size: ${props => props.theme.sizes.regular};
`;

export const Location = styled.text`
  width: 20%;
  font-size: ${props => props.theme.sizes.small};
  margin-top: 20px;
`;
