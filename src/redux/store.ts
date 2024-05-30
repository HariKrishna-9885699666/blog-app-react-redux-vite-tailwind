import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postSlice'; 

/**
 * Configures the Redux store with the posts reducer.
 */
const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;