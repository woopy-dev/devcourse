import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ILogItem } from "../../types";

type loggerString = {
  logArray: ILogItem[]
}

const initialState: loggerString = {
  logArray: []
}

const loggerSlice = createSlice({
  name: 'logger',
  initialState,
  reducers: {
    addLog: (state, { payload }: PayloadAction<ILogItem>) => {
      state.logArray.push(payload);
    }
  }
})

export const { addLog } = loggerSlice.actions;
export const loggerReducer = loggerSlice.reducer;