import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

import axios from "axios";
import { TimelineProps } from "../../components/TimeLine";

type DataType = {
    educations: TimelineProps[];
}
interface StateType {
    educations: TimelineProps[];
    isLoading: boolean,
    error: string | null,
}

// type FetchError = {
//   message: string;
// };

axios.defaults.baseURL = 'api';

export const getEducation = createAsyncThunk<
    DataType
    // { rejectValue: FetchError }
    >(
    'education/getEducation',
    async (_, thunkAPI) => {
    //   const state = thunkAPI.getState();
      try {
        const { data } = await axios.get('/educations');
          console.log(`This is my data`);
          console.log(data.educations);
        return data as DataType;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

const initialState: StateType = {
    educations: [],
    isLoading: false,
    error: null,
}

// const handlePending = (state) => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload.error;

// };


const educationSlice = createSlice({
  name:"education",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(getEducation.pending, (state) => {
        state.isLoading = true;
    })
      .addCase(getEducation.fulfilled, (state, action) => {
        state.educations = action.payload.educations;
        console.log(state.educations);
        state.isLoading = false;
    })
      .addCase(getEducation.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.error = action.payload.error;
    })
  },
});

export const educationReducer = educationSlice.reducer;

// export const selectEducation = (state: StateType) => state.educations;