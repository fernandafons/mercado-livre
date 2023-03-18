import styled from "styled-components";

export const Container = styled.div`  
`;

export const ContentBox = styled.div`
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

export const InnerBox = styled.div`
  width: 80%;
  background-color: ${props => props.theme.colors.white};
  padding: 30px 60px 20px 30px;
`;

export const Path = styled.text`
  font-size: ${props => props.theme.sizes.small};
  color: ${props => props.theme.colors.black};
`;

export const BoxProduct = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Image = styled.img`
  height: 400px;
  width: 400px;
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 150px;
  margin-left: 200px;
  justify-content: space-around;
`;

export const Header = styled.div`
  font-size: ${props => props.theme.sizes.small};
`;

export const Title = styled.text`
  font-size: ${props => props.theme.sizes.regular};

`;

export const Price = styled.text`
  font-size: ${props => props.theme.sizes.big};

`;

export const BuyButton = styled.button`
  height: 30px;
  width: 60%;
  background-color: ${props => props.theme.colors.blue};
  border: none;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

export const BoxDescription = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
  width: 700px;
`;

export const TitleDescription = styled.text`
  font-size: ${props => props.theme.sizes.regular};
  margin: 20px 0;
`;

export const DescriptionText = styled.text`
  color: ${props => props.theme.colors.black};

`;
