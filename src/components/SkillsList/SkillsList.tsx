import {
  StyledResult,
  StyledHeadWrapper,
  StyledScaleWrapper,
  StyledBlock,
  StyledSkillLevel
} from './SkillsList.styles'

import  { forwardRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { SkillsState } from '../../features/skills/skillsSlice';

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

  const skills: SkillsState[] = useSelector((state: RootState) => state.skills.skills);

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
      
      <StyledResult>
        {skills.map((skill) =>
          <Skill key={skill.id} skill={skill}/>
        )}
      </StyledResult>

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