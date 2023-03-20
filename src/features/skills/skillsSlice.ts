import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
// import type { PayloadAction } from '@reduxjs/toolkit';
import { MyFormValues } from "../../components/SkillsList/SkillsForm";

export interface SkillsState extends MyFormValues {
    id: string,
    skillName: string,
    skillRange: string | number,
};

type DataType = {
  skills: SkillsState[];
}
interface StateType {
    skills: SkillsState[];
    isLoading: boolean,
    error: string | null,
}


axios.defaults.baseURL = 'api';

export const getSkill = createAsyncThunk<
    DataType
    // { rejectValue: FetchError }
    >(
    'skills/getSkill',
    async (_, thunkAPI) => {
    //   const state = thunkAPI.getState();
      try {
        const { data } = await axios.get('/skills');
          console.log(`This is my data`);
          console.log(data.skills);
        return data as DataType;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

const initialState: StateType = {
    skills: [],
    isLoading: false,
    error: null,
}


const skillSlice = createSlice({
  name:"skills",
  initialState,
  reducers: {
    addSkill: (state, { payload }) => {
        state.skills = [payload, ...state.skills];
    },
    deleteSkill(state, { payload }) {
        state.skills = state.skills.filter(skill => skill.id !== payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getSkill.pending, (state) => {
        state.isLoading = true;
    })
      .addCase(getSkill.fulfilled, (state, action) => {
        state.skills = action.payload.skills;
        console.log(state.skills);
        state.isLoading = false;
    })
      .addCase(getSkill.rejected, (state, action: any) => {
        state.isLoading = false;
        console.log(action.payload);
        state.error = action.payload.error;
    })
  },
});

export const { addSkill, deleteSkill } = skillSlice.actions;
export const skillsReducer = skillSlice.reducer;


// =================================================== //



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


// const skillsSlice = createSlice({
//   name: "skills",
//   initialState: { skills: []},
//   reducers: {
//       addSkill: (state: { skills: SkillsState[] }, { payload }: PayloadAction<SkillsState>) => {
//         state.skills = [payload, ...state.skills];
//     //   reducer: (state, { payload }) => {
//     //     state.items = [payload, ...state.items];
//     //   },
//     //   prepare: newSkill => {
//     //     return {
//     //       payload: { ...newSkill, id: nanoid() },
//     //     };
//     //   },
//     },
//     deleteSkill(state: { skills: SkillsState[] }, { payload }) {
//         state.skills = state.skills.filter(skill => skill.id !== payload);
//     //   const index = state.findIndex(skill => skill.id === action.payload);
//     //   state.splice(index, 1);
//     },
//   },
// });

// export const { addSkill, deleteSkill } = skillsSlice.actions;
// export const skillsReducer = skillsSlice.reducer;

