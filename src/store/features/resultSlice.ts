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
    setUserSettings: (state, action) => {
      state.result = { ...state.result, ...action.payload };
    },
  },
});
export default ResultSlice.reducer;
export const { saveResult } = ResultSlice.actions;
export const { setUserSettings } = ResultSlice.actions;
