import {
  StyledResult,
  StyledHeadWrapper,
  StyledScaleWrapper,
  StyledBlock,
  StyledSkillLevel
} from './SkillsList.styles'

import  { forwardRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/store';
import { getSkill, SkillsState } from '../../features/skills/skillsSlice';

import SkillsForm from './SkillsForm';
import Skill from './Skill/Skill';
import Button from '../Button';
import Heading from '../Box/Heading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

interface SkillsProps {
  id: string
}

export type Ref = HTMLElement;

const SkillsList = forwardRef<Ref, SkillsProps>(({id}: SkillsProps, forwardedRef) => {

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const skillsList: SkillsState[] = useSelector((state: RootState) => state.skills.skills);
  const status = useSelector((state: RootState) => state.skills.isLoading);
  const error = useSelector((state: RootState) => state.skills.error);

  // const skillsList = skills.map(skill => skill.skill)
  // console.log(skillsList);
  useEffect(() => {
    dispatch(getSkill());
  }, [dispatch])


  return (
    <section ref={forwardedRef} id={id}>
      <StyledHeadWrapper>
        <Heading title='Skills' />
        <Button
          text={isOpen ? 'Close edit' : 'Open edit'}
          onClick={() => setIsOpen(prev => !prev)}
          icon={<FontAwesomeIcon icon={faEdit} />}
        />
      </StyledHeadWrapper>

      {isOpen && (<SkillsForm />)}
      
      {status && <p>Loading...</p>}
      {error !== null && (
          <p>Oops, some error occured... {error}</p>
      )}
      {(skillsList.length > 0 && error === null) && (
        <StyledResult>
          {skillsList.map((skill ) =>
            <Skill key={skill.id} skill={skill} />
          )}
        </StyledResult>)}

      <StyledScaleWrapper>
        <StyledBlock></StyledBlock>
        <StyledBlock></StyledBlock>
        <StyledBlock></StyledBlock>
      </StyledScaleWrapper>
      
      <StyledSkillLevel>
        <p>Beginner</p>
        <p>Proficient</p>
        <p>Expert</p>
        <p>Master</p>
      </StyledSkillLevel>
    </section>
  )
})

SkillsList.displayName = "SkillsList";

export default SkillsList;