import styled, { css } from "styled-components";


export const StyledWrapper = styled.div<{ isInline: boolean, facade: boolean }>`
    display: flex;
    flex-direction: ${({isInline }) => (isInline ? 'row': 'column')};
    align-items: center;
    justify-content: ${({isInline }) => (isInline ? 'flex-start': 'center')};
    margin: 20px;
    gap: 10px;
    color: ${({isInline }) => (isInline ? props => props.theme.colors.oxford : props => props.theme.colors.white)};
    h1 {
        width: ${({ isInline }) => (isInline ? '' : '80%')};
        text-align: center;
        font-size: ${({ isInline }) => (isInline ? props => props.theme.fontSizes.medium : props => props.theme.fontSizes.huge)};
        font-weight: ${({isInline }) => (isInline ? 'normal': 'bold')};
        @media (max-width: 1170px) {
            display: ${({ isInline }) => (isInline ? '' : 'none')};
            ${({ facade }) =>
            facade &&
            css`
                display: block;
            `}
            font-size: ${({isInline }) => (isInline ? props => props.theme.fontSizes.medium : '')};
        }
    }
    h2 {
        font-size: ${({ isInline }) => (isInline ? props => props.theme.fontSizes.medium : props => props.theme.fontSizes.large)};
        font-weight: ${({isInline }) => (isInline ? 'normal': 'bold')};
    }
    p {
        ${({ facade }) =>
        facade &&
        css`
            font-size: props => props.theme.fontSizes.medium;
            max-width: 600px;
            text-align: center;
        `}
        color: ${({ isInline }) => (isInline ? props => props.theme.colors.accent : 'inherit')};
    }
`

export const StyledImgDiv = styled.div<{ isInline: boolean, facade: boolean }>`
    width: ${({isInline }) => (isInline ? '50px': '100px')};
    height: ${({isInline }) => (isInline ? '50px': '100px')};
    border: 1px solid ${props => props.theme.colors.white};
    border-radius: 50%;
    overflow: hidden;
    transition: all 0.3s ease;
    ${({ facade }) =>
        facade &&
        css`
            width: 300px;
            height: 300px;
        `}
    img {
        width: auto;
        height: 130%;
        object-fit: cover;
    }
    @media (max-width: 1070px) {
        width: ${({isInline }) => (isInline ? '50px': '12vw')};
        height: auto;
        ${({ facade }) =>
        facade &&
        css`
            width: 200px;
            height: 200px;
        `}
    }
    /* @media (max-width: 768px) {
        
    }  */
`