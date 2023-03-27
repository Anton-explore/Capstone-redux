import styled, { css } from "styled-components"

type StyledButtonProps = {
  up?: boolean
}

type StyledHeadingProps = {
  shrunk?: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  max-width: 140px;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;

  background-color: ${({theme}) => theme.colors.oxford};
  color: ${({theme}) => theme.colors.white};
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
    background-color: ${({theme}) => theme.colors.accent};
    color: ${({theme}) => theme.colors.white};
    cursor: pointer;
  }

  &:disabled {
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.alto};
    box-shadow: none;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`

export const StyledHeading = styled.div<StyledHeadingProps>`
    @media (max-width: 1070px) {
      display: ${({ shrunk }) => (shrunk ? 'none' : 'block')};
    }
`
