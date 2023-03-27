import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { getEducation } from "../education/educationSlice";



const useTimeLineHook = () => {
  const dispatch = useAppDispatch();
  const educationsList = useSelector((store: RootState) => store.education.educations);
  const status = useSelector((store: RootState) => store.education.isLoading);
  const error = useSelector((store: RootState) => store.education.error);

  useEffect(() => {
    dispatch(getEducation());
  }, [dispatch])

  return {
    educationsList,
    status,
    error,
  }
};

export default useTimeLineHook;