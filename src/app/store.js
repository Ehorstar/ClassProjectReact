import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../slices/counterSlice";
import PostReducer from "../slices/postsSlice";

export const store = configureStore({
  reducer: { counter: CounterReducer, posts: PostReducer },
});
