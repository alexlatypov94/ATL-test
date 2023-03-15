import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { noteReduces } from './noteSlice';

export const store = configureStore({
  reducer: {
    notes: noteReduces,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
