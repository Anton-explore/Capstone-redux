import styled from "styled-components";
import { Form, Field } from "formik";


export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  margin: 20px 0;
  padding: 20px 40px;
  border: 1px solid ${({ theme }) => theme.colors.alto};
`
export const StyledErrorMessage = styled.div`
  color: red;
  font-size: 14px; 
  font-weight: 200;
`

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  padding: 4px;
  text-align: left;
`
export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 4px;
  text-align: center;
`

export const StyledLabel = styled.label`
  width: 40%;
`

export const StyledField = styled(Field)`
  &.error {
    border: 2px solid red;
  }
`

export const StyledResult = styled.ul`
  width: 100%;
  text-align: left;
  border: 1px solid white;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`

export const StyledHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledScaleWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
export const StyledBlock = styled.div`
  height: 20px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`
export const StyledSkillLevel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`