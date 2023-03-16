import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

export const Container = styled.div`
  display: flex;
  height: 50px;
  background-color: ${props => props.theme.colors.yellow};
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  display: flex;
  height: 40px;
`;

export const SearchInput = styled.input`
  display: flex;
  height: 32px;
  width: 55%;
  padding-left: 10px;
  border: none;
  border-radius: 3px 0 0 3px;
  margin-left: 15px;
`;

export const Icon = styled(SearchIcon)`
`;

export const BoxIcon = styled.button`
  display: flex;
  height: 34px;
  width: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.gray};
  border: none;
  border-radius: 0 3px 3px 0;
  padding: 10px;

`;