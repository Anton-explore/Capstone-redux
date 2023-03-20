import styled from "styled-components";

interface StyledHeadingProps {
    color?: string,
    theme: any
}

export const StyledHeading = styled.h2`
    color:  ${ ({color='accent', theme}: StyledHeadingProps) => theme.colors[color]};
    font-weight: 700;
    font-size: ${ ({ color='accent', theme }: StyledHeadingProps) => color === 'black' ? theme.fontSizes.medium : theme.fontSizes.large};
    margin-bottom: 20px;
`;