import styled from "styled-components";

export const StyledMainWrapper = styled.main`
    background: ${props => props.theme.colors.mainBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    color: ${props => props.theme.colors.white};
`