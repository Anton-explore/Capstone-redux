import styled, { css } from "styled-components"

export const StyledButton = styled.button<{up: boolean}>`
  max-width: 140px;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;

  background-color: ${props => props.theme.colors.oxford};
  color: ${props => props.theme.colors.white};
  ${({ up }) =>
    up &&
    css`
      position: fixed;
      bottom: 0px;
      right: 50px;
      z-index: 5;
    `}
  

  &:active,
  &:focus,
  &:hover {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
    cursor: pointer;
  }

  &:disabled {
    cursor: pointer;
    background-color: ${props => props.theme.colors.alto};
    box-shadow: none;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`

export const StyledDiv = styled.div<{ shrunk: boolean }>`
    @media (max-width: 1070px) {
      display: ${({ shrunk }) => (shrunk ? 'none' : 'block')};
    }
`
