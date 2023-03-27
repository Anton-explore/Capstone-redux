import styled from "styled-components";


export const StyledLoaderWrapper = styled.div`
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.accent};

    p {
        color: red;
        font-size: ${({ theme }) => theme.fontSizes.small}; 
        font-weight: 600;
    }
`