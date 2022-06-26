import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsService from "../service/news.service";

const initialState = {
  news: [],
  searchNews: []
}

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async () => {
    const news = await newsService.fetchNews();

    return news;
  }
)

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    searched: (state, action) => {
      state.searchNews.push(action.payload);
    },
    remove: (state, action) => {
      state.searchNews.pop()
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.error = action.payload;
        state.status = 'rejected';
      })
  }
})

export const { searched, remove } = newsSlice.actions;

export const getNews = state => state.newsReducer.news;
export const error = state => state.newsReducer.error;
export const searchNews = state => state.newsReducer.searchNews;

export default newsSlice.reducer;