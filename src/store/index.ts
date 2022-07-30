import { combineReducers } from 'redux';

import { configReducer } from './config';

export const rootReducer = combineReducers({
  config: configReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
