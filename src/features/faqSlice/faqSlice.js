import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    id: 1,
    textKey1: "QUESTION1",
    textKey2: "ANSWER1",
  },
  {
    id: 2,
    textKey1: "QUESTION2",
    textKey2: "ANSWER2",
  },
  {
    id: 3,
    textKey1: "QUESTION3",
    textKey2: "ANSWER3",
  },
  {
    id: 4,
    textKey1: "QUESTION4",
    textKey2: "ANSWER4",
  },
  {
    id: 5,
    textKey1: "QUESTION5",
    textKey2: "ANSWER5",
  },
  {
    id: 6,
    textKey1: "QUESTION6",
    textKey2: "ANSWER6",
  },
];

const faqSlice = createSlice({
  name: "faq",
  initialState: initialValue,
  reducers: {},
});

export const getFAQ = (state) => state.faq;
export default faqSlice.reducer;
