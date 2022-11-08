import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import users from './usersSlice';
import counter from './counterSlice';

const combinedReducer = combineReducers({
  counter,
  users,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    // console.log('Users: ', action.payload.users.users);

    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });

export const selectAllUsers = (state) => state.users.users;
export const userById = (users, id) => users.filter((u) => u.id === id);
