import styled from "styled-components";

export const StyledPanel = styled.header<{ isExpanded: boolean }>`
  /* position: fixed;
  top: 0;
  left: 0; */
  background: none;
  border: none;
  width: ${({ isExpanded }) => (isExpanded ? '20%' : '40px')};
  position: relative;
  display: flex;
  transition: all 0.1s ease-in;
`

export const MenuContainer = styled.div<{ isExpanded: boolean }>`
  display: ${({ isExpanded }) => (isExpanded ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.oxford};
  width: calc(100% - 40px);
  /* width: ${({ isExpanded }) => (isExpanded ? '100%' : '0')}; */
  height: 100vh;
  text-align: center;
  position: sticky;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in;
`;

export const Toggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.oxford};
  color: ${props => props.theme.colors.white};
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  /* margin-top: 50px; */
  position: sticky;
  top: 50px;
  left: 0;
`;



