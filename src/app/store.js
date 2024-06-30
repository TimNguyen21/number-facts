import { configureStore } from '@reduxjs/toolkit';
import numberFactSaveReducer from '../features/saveNumberFactSlice';

export default configureStore({
  reducer: {
    numberFactSave: numberFactSaveReducer,
  },
});