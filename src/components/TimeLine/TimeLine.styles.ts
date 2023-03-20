import styled from 'styled-components';
import rectangle from './../../assets/images/rectangle.svg';

export const StyledWrapper = styled.section`
    /* width: 70vw; */
    overflow-y: hidden;
    overflow-x: visible;
`

export const StyledInfo = styled.ul`
    /* width: 100%; */
    /* padding: 15px; */
    height: 30vh;
    max-height: 80vh;
    /* overflow-y: scroll; */
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
    /* height: auto; */
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
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
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
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.2;
`;

export const StyledText = styled.p`
/* width: 852px; */

color: ${props => props.theme.colors.oxford};
    padding: 15px 0 0 15px;
    margin-bottom: 5px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
`;