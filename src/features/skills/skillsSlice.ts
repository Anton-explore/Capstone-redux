import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { MyFormValues } from "../../components/SkillsList/SkillsForm";

export interface SkillsState extends MyFormValues {
    id: string,
    skillName: string,
    skillRange: string | number,
};

// const skillsInitialState: SkillsState[] = [
//     {
//     id: '0',
//     skillName: 'JavaScript',
//     skillRange: 90,
//     },
//     {
//     id: '1',
//     skillName: 'TypeScript',
//     skillRange: 20,
//  }
// ]


const skillsSlice = createSlice({
  name: "skills",
  initialState: { skills: []},
  reducers: {
      addSkill: (state: { skills: SkillsState[] }, { payload }: PayloadAction<SkillsState>) => {
        state.skills = [payload, ...state.skills];
    //   reducer: (state, { payload }) => {
    //     state.items = [payload, ...state.items];
    //   },
    //   prepare: newSkill => {
    //     return {
    //       payload: { ...newSkill, id: nanoid() },
    //     };
    //   },
    },
    deleteSkill(state: { skills: SkillsState[] }, { payload }) {
        state.skills = state.skills.filter(skill => skill.id !== payload);
    //   const index = state.findIndex(skill => skill.id === action.payload);
    //   state.splice(index, 1);
    },
  },
});

export const { addSkill, deleteSkill } = skillsSlice.actions;
export const skillsReducer = skillsSlice.reducer;

