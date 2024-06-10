import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  try {
    const response = await axios.get("http://localhost:8800/news");
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
});
const initialValue = {
  news: [],
  status: "idle",
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getNews = (state) => state.news.news;
export default newsSlice.reducer;
