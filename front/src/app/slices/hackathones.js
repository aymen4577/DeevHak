import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import hackathoneDataService from "../services/hackathone.service";
import QuizDataService from "../services/quiz.service";
const initialState = [];

export const createhackathone = createAsyncThunk(
  "hackathones/create",
  async (data) => {
    const res = await hackathoneDataService.create(data);
    return res.data;
  }
);

export const retrievehackathones = createAsyncThunk(
  "hackathones/retrieve",
  async () => {
    const res = await hackathoneDataService.getAll();
    return res.data;
  }
);

export const updatehackathone = createAsyncThunk(
  "hackathones/update",
  async ({ id, data }) => {
    const res = await hackathoneDataService.update(id, data);
    return res.data;
  }
);

export const deletehackathone = createAsyncThunk(
  "hackathones/delete",
  async ({ id }) => {
    await hackathoneDataService.delete(id);
    return { id };
  }
);
export const deleteQuiz = createAsyncThunk(
  "quizzes/delete",
  async ({ id }) => {
    await QuizDataService.delete(id);
    return { id };
  }
);

export const deleteAllhackathones = createAsyncThunk(
  "hackathones/deleteAll",
  async () => {
    const res = await hackathoneDataService.deleteAll();
    return res.data;
  }
);

export const findhackathonesByTitle = createAsyncThunk(
  "hackathones/findByTitle",
  async ({ title }) => {
    const res = await hackathoneDataService.findByTitle(title);
    return res.data;
  }
);

const hackathoneSlice = createSlice({
  name: "tutorial",
  initialState,
  extraReducers: {
    [createhackathone.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrievehackathones.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [updatehackathone.fulfilled]: (state, action) => {
      const index = state.findIndex(tutorial => tutorial.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deletehackathone.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
    [deleteAllhackathones.fulfilled]: (state, action) => {
      return [];
    },
    [findhackathonesByTitle.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = hackathoneSlice;
export default reducer;
