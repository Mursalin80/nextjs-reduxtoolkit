import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AppState } from './store';
import { User } from '../types/types';

const initialState = {
  users: [],
  // status: 'idle',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state: AppState, action) => {
      state.users = [...state.users, ...action.payload];
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
