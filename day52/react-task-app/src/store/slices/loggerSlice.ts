import { createSlice } from "@reduxjs/toolkit";
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

  }
})

export const loggerReducer = loggerSlice.reducer;