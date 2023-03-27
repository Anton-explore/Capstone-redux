import styled from 'styled-components';
import rectangle from './../../assets/images/rectangle.svg';

export const StyledWrapper = styled.section`
    overflow-y: hidden;
    overflow-x: visible;
`

export const StyledInfo = styled.ul`
    height: 30vh;
    max-height: 80vh;
    overflow-y: auto;
    overflow-x: visible;
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        background-color: ${props => props.theme.colors.gallery};
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: ${props => props.theme.colors.accent};
    }
`;

export const StyledItem = styled.li`
    height: fit-content;
    margin-bottom: 20px;
    display: flex;
    align-items: base-line;
    gap: 15px;
`;

export const StyledDateBlock = styled.div`
    color: ${props => props.theme.colors.oxford};
    width: 50px;
    padding: 15px 0 0 0;
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.small};
    line-height: 1.2;
    position: relative;

    &::after {
        content: "";
        display: block;
        width: 5px;
        height: 80%;
        position: absolute;
        top: 40px;
        left: 15px;
        background-color: ${props => props.theme.colors.accent};
    }
`;

export const StyledInfoBlock = styled.div`
    background: ${props => props.theme.colors.gallery};
    position: relative;
    width: 100%;
    &::before{
        content: url(${rectangle});
        position: absolute;
        top: 15px;
        left: -10px;
        width: 10px;
        height: 13px;
    }
`;

export const StyledTitle = styled.h3`
    color: ${props => props.theme.colors.oxford};
    padding: 15px 0 0 15px;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.small};
    line-height: 1.2;
`;

export const StyledText = styled.p`

color: ${props => props.theme.colors.oxford};
    padding: 15px 0 0 15px;
    margin-bottom: 5px;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizes.tiny};
    line-height: 1.5;
`;