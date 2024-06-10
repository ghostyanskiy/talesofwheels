import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    id: 1,
    textKey1: "HistoryTitle1",
    textKey2: "HistoryDesc1",
    img: "./images/history/fiat.jpg",
  },
  {
    id: 2,
    textKey1: "HistoryTitle2",
    textKey2: "HistoryDesc2",
    img: "./images/history/autoshop.jpg",
  },
  {
    id: 3,
    textKey1: "HistoryTitle3",
    textKey2: "HistoryDesc3",
    img: "./images/history/dodge.jpg",
  },
  {
    id: 4,
    textKey1: "HistoryTitle4",
    textKey2: "HistoryDesc4",
    img: "./images/history/300sl.jpg",
  },
  {
    id: 5,
    textKey1: "HistoryTitle5",
    textKey2: "HistoryDesc5",
    img: "./images/history/stirlingmoss.jpg",
  },
  {
    id: 6,
    textKey1: "HistoryTitle6",
    textKey2: "HistoryDesc6",
    img: "./images/history/revolution.jpg",
  },
];

const historySlice = createSlice({
  name: "history",
  initialState: initialValue,
  reducers: {},
});

export const getHistory = (state) => state.history;
export default historySlice.reducer;
