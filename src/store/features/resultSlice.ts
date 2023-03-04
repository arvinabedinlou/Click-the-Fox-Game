import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Result {
  name?: string;
  date?: string;
  score?: number;
}
export interface ResultState {
  result: Result[];
}

const initialState: ResultState = {
  result: [],
};

export const ResultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    saveResult: (
      state,
      action: PayloadAction<{ name?: string; date?: string; score?: number }>
    ) => {
      state.result.push({
        date: action.payload.date,
        name: action.payload.name,
        score: action.payload.score,
      });
    },
    updateResult: (state, action) => {
      state.result[state.result.length - 1].score = action.payload.score;
    },
  },
});
export default ResultSlice.reducer;
export const { saveResult } = ResultSlice.actions;
export const { updateResult } = ResultSlice.actions;
