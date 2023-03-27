import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SkillsState, SkillStateType } from "../../services/types";




type DataType = {
  skills: SkillsState[];
}



axios.defaults.baseURL = 'api';

export const getSkill = createAsyncThunk<
    DataType
    // { rejectValue: FetchError }
    >(
    'skills/getSkill',
    async (_, thunkAPI) => {
      try {
        const { data } = await axios.get('/skills');
        return data as DataType;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


export const addSkill = createAsyncThunk<
  DataType,
  SkillsState
    // { rejectValue: FetchError }
  >(
  'skills/addSkill',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/skills`, formData);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteSkill = createAsyncThunk<
  any,
  any
    // { rejectValue: FetchError }
  >(
  'skills/deleteSkill',
  async (skillId, { rejectWithValue }) => {
    try {
      const { status, statusText } = await axios.delete(`/skills/${skillId}`);
      if (status !== 204) {
        throw new Error(`${status} : ${statusText}`);
      }
      return skillId;
    } catch (error:any) {
      return rejectWithValue(error.message);
    }
  }
);



const initialState: SkillStateType = {
    skills: [],
    isLoading: false,
    error: null,
}


const skillSlice = createSlice({
  name:"skills",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(getSkill.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSkill.fulfilled, (state, action: any) => {
        state.skills = action.payload.skills.length ? action.payload.skills : state.skills;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getSkill.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    
      .addCase(addSkill.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addSkill.fulfilled, (state, action: any) => {
        state.skills = [...state.skills, action.payload.skill];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addSkill.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    
    .addCase(deleteSkill.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteSkill.fulfilled, (state, { payload }: any) => {
        state.skills = state.skills.filter(skill => skill.id !== payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteSkill.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

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

