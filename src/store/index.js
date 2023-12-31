import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import resumeReducer from './resume-slice';
import halandReducer from './haland-slice';
import moshavereFormReducer from './moshavereForm-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    resume: resumeReducer,
    haland: halandReducer,
    moshavereForm: moshavereFormReducer,
  },
});

export default store;
