import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { EduStateType, TimelineProps } from "../../services/types";


type DataType = {
  educations: TimelineProps[];
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
      try {
        const { data } = await axios.get('/educations');
        return data as DataType;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

const initialState: EduStateType = {
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
        state.isLoading = false;
    })
      .addCase(getEducation.rejected, (state, action: any) => {
        state.isLoading = false;
        console.log(action.payload);
        state.error = action.payload.error;
    })
  },
});

export const educationReducer = educationSlice.reducer;
