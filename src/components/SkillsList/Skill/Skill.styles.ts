import styled from "styled-components";

export const StyledWrapper = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    align-items: center;
`
export const StyledDelButton = styled.button`
    background: transparent;
    border: none;
`
export const StyledSkillLane = styled.div<{ wt: string }>`
    background-color: #26C17E;
    color: #fff;
    font-size: 16px;
    width: ${props => props.wt};
    padding: 10px;
    overflow: hidden;
`
