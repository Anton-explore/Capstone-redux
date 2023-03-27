import styled from "styled-components";

export const StyledPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.colors.mainBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  gap: 20px;
`;

export const StyledTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.huge};
  color: ${props => props.theme.colors.white};
`;

export const StyledDescription = styled.p`
  max-width: 400px;
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.white};
  text-align: center;
`;
