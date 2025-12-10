import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/gePosts", async () => {
  const responce = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return responce.data;
});

const initialState = {
  data: [],
  loading: false,
  error: null,
};
export const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
const PostReducer = postSlice.reducer;
export default PostReducer;
