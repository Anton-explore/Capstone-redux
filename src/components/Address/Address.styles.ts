import styled from 'styled-components';

export const StyledAddress = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.raven};
    strong {
        font-size: ${props => props.theme.fontSizes.medium};
        color: ${props => props.theme.colors.oxford}
    }
`