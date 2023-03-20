import {
  StyledForm,
  LabelWrapper,
  StyledLabel,
  StyledErrorMessage,
  StyledField,
} from './../SkillsList.styles'

import React from 'react';
import { useDispatch } from "react-redux";
import { addSkill } from '../../../features/skills/skillsSlice';

import {
  Formik,
  FormikErrors
} from 'formik';

import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

import Button from '../../Button';


export interface MyFormValues extends Record<string, {}> {
  skillName: string,
  skillRange: string | number,
}


// const skillsArr: MyFormValues[] = [];

// const addSkills = (skills: MyFormValues) => {
//   skillsArr.push(skills);
// }

const SkillsForm: React.FC<{}> = () => {

    const skills: MyFormValues[] = useSelector((state: RootState) => state.skills.skills);
    const dispatch = useDispatch();

    const validate = (values: MyFormValues ) => {
        const errors: FormikErrors<MyFormValues> = {};
        const regEx = /^[a-zA-Z0-9\s]*$/;
        
        if (!values.skillName) {
            errors.skillName = 'Skill name is a required field';
        } else if (!regEx.test(values.skillName)) {
            errors.firstName = 'Must be only letters or numbers!'
        }
        const isInclude = skills.some(skill => skill.skillName === values.skillName);
        if (isInclude) {
            errors.skillName = 'This skill is already in your list';
        }

        if (!values.skillRange) {
            errors.skillRange = 'Skill range is a required field';
        } else if (typeof values.skillRange === 'string') {
            if (isNaN(+values.skillRange)) {
            errors.skillRange = 'Skill range must be a number'
            }
        } else if (+values.skillRange < 10) {
            errors.skillRange = 'Skill range must be greater than or equal to 10'
        } else if (+values.skillRange > 100) {
            errors.skillRange = 'Skill range must be less than or equal to 100'
        }
        
        return errors;
    }

    const initValues: MyFormValues = {
      skillName: '',
      skillRange: '',
    }

    return (
        <Formik
            initialValues={initValues}
            validate={validate}
            
            onSubmit={(values, actions) => {
                dispatch(addSkill({ id: nanoid(), ...values }));
            //   addSkills(values);
            //   console.log(skillsArr);
              // alert(JSON.stringify(values, null, 4));
              actions.setSubmitting(false);
              actions.resetForm();
            }}
        >
            {({
                errors,
                touched,
                values,
                dirty,
                isSubmitting,
                isValid,
                handleChange,
                handleBlur
            }) => (
                <StyledForm className="form">
                    <LabelWrapper>
                        <StyledLabel htmlFor="skillName">Skill Name</StyledLabel>
                        <div className="validated">
                        <StyledField
                            name="skillName"
                            type="text"
                            placeholder="Enter skill name"
                            className={errors.skillName && touched.skillName ? "error" : ""}
                        />
                        {errors.skillName && touched.skillName ? (
                            <StyledErrorMessage>{ errors.skillName }</StyledErrorMessage>
                        ) : null}
                        </div>
                    </LabelWrapper>
                    <LabelWrapper>
                        <StyledLabel htmlFor="skillRange">Skill Range</StyledLabel>
                        <div className="validated">
                        <StyledField
                            name="skillRange"
                            type="text"
                            placeholder="Enter skill range"
                            className={errors.skillRange && touched.skillRange ? "error" : ""}
                        />
                        {errors.skillRange && touched.skillRange ? (
                            <StyledErrorMessage>{ errors.skillRange }</StyledErrorMessage>
                        ) : null}
                        </div>
                    </LabelWrapper>

                    <Button
                        disabled={!isValid || !dirty || isSubmitting}
                        text={'Add skill'} 
                    />            
                </StyledForm>
            )}
        </Formik>
    )
}

export default SkillsForm;
