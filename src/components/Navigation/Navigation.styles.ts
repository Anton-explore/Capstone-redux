import styled from 'styled-components';


export const MenuLinks = styled.ul`
    list-style: none;
    margin: 0 40px 0 40px;
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    overflow: hidden;

    li {
    /* width: 100%; */
    padding: 0 20px;
    text-align: left;
    margin: 0 20px;

    a {
        margin-bottom: 20px;
        padding: 10px;
        text-decoration: none;
        color: ${props => props.theme.colors.raven};
        transition: all 0.3s ease;
        border-radius: 10px;
        display: flex;
        justify-content: left;
        gap: 10px;

        &:hover {
        background-color: ${props => props.theme.colors.gallery};
        color: ${props => props.theme.colors.accent};
        }

        &.active {
            color: ${props => props.theme.colors.accent};
        }
    }
    }

    span {
        @media (max-width: 1070px) {
            display: none;
        }
    }
`;
