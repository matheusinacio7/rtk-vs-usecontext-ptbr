import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Pessoa Anônima',
  githubUsername: null,
  highestCount: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName: (state, { payload }) => {
      state.name = payload;
    },

    updateGithubUsername: (state, { payload }) => {
      state.githubUsername = payload;
    },

    updateHighestCount: (state, { payload }) => {
      if (payload > state.highestCount) {
        state.highestCount = payload;
      }
    },
  },
});

export const { updateName, updateGithubUsername, updateHighestCount } = userSlice.actions;

export default userSlice.reducer;
