import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Result {
  name?: string;
  date?: string;
  score?: number;
}

export interface ResultState {
  results: Result[];
}
const initialState: ResultState = {
  results: [],
};

export const ResultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    saveResult: (
      state,
      action: PayloadAction<{ name?: string; date?: string; score?: number }>
    ) => {
      state.results.push({
        date: action.payload.date,
        name: action.payload.name,
        score: action.payload.score,
      });
    },
  },
});
export default ResultSlice.reducer;
export const { saveResult } = ResultSlice.actions;
