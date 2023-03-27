import { useEffect } from "react";
import { useSelector } from "react-redux";
import { SkillsState } from "../../services/types";
import { RootState, useAppDispatch } from "../../store/store";
import { getSkill } from "../skills/skillsSlice";




const useSkillsHook = () => {
  const dispatch = useAppDispatch();
  const skillsList: SkillsState[] = useSelector((state: RootState) => state.skills.skills);
  const status = useSelector((state: RootState) => state.skills.isLoading);
  const error = useSelector((state: RootState) => state.skills.error);

  useEffect(() => {
    dispatch(getSkill());
  }, [dispatch])

  return {
    skillsList,
    status,
    error,
  }
};

export default useSkillsHook;