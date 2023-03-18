import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  background-color: ${props => props.theme.colors.gray};
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

export const BoxPath = styled.div`
  width: 80%;
  margin-bottom: 10px;
`;

export const Path = styled.text`
  font-size: ${props => props.theme.sizes.small};
`;