import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
};

type TInitialState = typeof initialState;

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setConfig: (state, action: PayloadAction<Partial<TInitialState>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { actions: configActions, reducer: configReducer } = configSlice;
