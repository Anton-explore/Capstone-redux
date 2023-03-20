import { MdClose } from "react-icons/md";

import { deleteSkill, SkillsState } from "../../../features/skills/skillsSlice";
import { StyledDelButton, StyledSkillLane, StyledWrapper } from "./Skill.styles";

import { useAppDispatch } from "../../../store/store";



const Skill = ({ skill }: { skill: SkillsState }) => {

  const dispatch = useAppDispatch();

  const handleDelete = () => dispatch(deleteSkill(skill.id));

  return (
    <StyledWrapper key={skill.id}>
          <StyledSkillLane wt={`${skill.skillRange}%`}>
                {skill.skillName}
            </StyledSkillLane>
        <StyledDelButton onClick={handleDelete}>
            <MdClose size={24} />
        </StyledDelButton>
    </StyledWrapper>
  );
};

export default Skill;