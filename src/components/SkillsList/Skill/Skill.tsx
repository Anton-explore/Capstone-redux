import { MdClose } from "react-icons/md";

import { deleteSkill } from "../../../features/skills/skillsSlice";
import { StyledDelButton, StyledSkillLane, StyledWrapper } from "./Skill.styles";

import { useAppDispatch } from "../../../store/store";
import { SkillsState } from "../../../services/types";



const Skill = ({ skill }: { skill: SkillsState }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => dispatch(deleteSkill(skill.id));

  return (
    <StyledWrapper>
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