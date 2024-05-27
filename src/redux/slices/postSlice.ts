import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostsState {
  posts: Post[];
}

const LOCAL_STORAGE_KEY = 'blogPosts';

const initialState: PostsState = {
    posts: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]').sort(
      (a: Post, b: Post) => b.id - a.id // Sort by id in descending order
    ),
};  

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
        state.posts.unshift({ ...action.payload });
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.posts));
    },      
    updatePost: (state, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.posts));
      }
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.posts));
    },
  },
});

export const { addPost, updatePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
