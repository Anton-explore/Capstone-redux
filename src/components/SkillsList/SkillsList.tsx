import {
  StyledResult,
  StyledHeadWrapper,
  StyledScaleWrapper,
  StyledBlock,
  StyledSkillLevel
} from './SkillsList.styles'

import  { forwardRef, useState } from 'react';

import SkillsForm from './SkillsForm';
import Skill from './Skill/Skill';
import Button from '../Button';
import Heading from '../Box/Heading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Ref, UniProps } from '../../services/types';
import useSkillsHook from '../../features/hooks/useSkillsHook';
import Loader from '../Loader';
import { SKILL_LEVEL, TITLES } from '../../services/props';


const SkillsList = forwardRef<Ref, UniProps>(({id}: UniProps, forwardedRef) => {

  const [isOpen, setIsOpen] = useState(false);

  const { skillsList, error, status} = useSkillsHook();

  return (
    <section ref={forwardedRef} id={id}>
      <StyledHeadWrapper>
        <Heading title={TITLES.SK} />
        <Button
          text={isOpen ? 'Close edit' : 'Open edit'}
          onClick={() => setIsOpen(prev => !prev)}
          icon={<FontAwesomeIcon icon={faEdit} />}
        />
      </StyledHeadWrapper>

      {isOpen && (<SkillsForm />)}
      
      {status && <Loader status={status} />}
      {error !== null && (
          <Loader error={true} />
      )}
      {(skillsList.length > 0 && error === null && !status) && (
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
        <p>{SKILL_LEVEL.BG}</p>
        <p>{SKILL_LEVEL.PR}</p>
        <p>{SKILL_LEVEL.EX}</p>
        <p>{SKILL_LEVEL.MS}</p>
      </StyledSkillLevel>
    </section>
  )
})

SkillsList.displayName = "SkillsList";

export default SkillsList;