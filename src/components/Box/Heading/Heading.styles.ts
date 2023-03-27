import styled from "styled-components";

interface StyledHeadingProps {
    color?: string,
    theme: any
}

export const StyledHeading = styled.h2<StyledHeadingProps>`
    color:  ${ ({color='accent', theme}) => theme.colors[color]};
    font-weight: 700;
    font-size: ${ ({ color='accent', theme }) => color === 'black' ? theme.fontSizes.small : theme.fontSizes.large};
    margin-bottom: 20px;
`;