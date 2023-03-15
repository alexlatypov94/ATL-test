import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface SingleNote {
  id: string;
  description: string;
  date: string;
  isSelected: boolean;
}

export interface NoteInitialState {
  notes: SingleNote[];
}

const initialState: NoteInitialState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNewNote: (state, action) => {
      const unSelectedNotes = state.notes
        .map((el) => ({
          ...el,
          isSelected: false,
        }))
        .filter((el) => el.description);
      state.notes = [...unSelectedNotes, action.payload];
    },
    selectNote: (state, action) => {
      state.notes = state.notes.map((el) => ({
        ...el,
        isSelected: action.payload === el.id,
      }));
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter((el) => el.id !== action.payload);
      if (state.notes[0]) {
        state.notes[0].isSelected = true;
      }
    },
    changeNote: (state, action) => {
      const note = state.notes.find((el) => el.id === action.payload.id);
      if (note) {
        note.description = action.payload.description;
      }
    },
    filterEmptyNotes: (state) => {
      state.notes = state.notes.filter((el) => el.description);
    },
  },
});

export const noteSelector = createSelector(
  (state: RootState) => state,
  ({ notes }) => notes
);

export const noteReduces = noteSlice.reducer;
export const {
  addNewNote,
  selectNote,
  removeNote,
  changeNote,
  filterEmptyNotes,
} = noteSlice.actions;
