import React, { useCallback } from 'react';
import { BorderColor, DeleteOutline } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  addNewNote,
  noteSelector,
  removeNote,
  SingleNote,
} from '../store/noteSlice';
import { IconButton } from './IconButton';
import { v4 } from 'uuid';
import { NoteHeaderContainer, SearchInput } from './styles';

const defaultNote: SingleNote = {
  id: '',
  description: '',
  date: '',
  isSelected: true,
};

interface NoteHeaderProps {
  onChangeSearchValue: (value: string) => void;
  searchValue: string;
}

const DeleteIcon = <DeleteOutline color="info" />;
const AddNewNoteIcon = <BorderColor color="info" />;

export const NoteHeader: React.FC<NoteHeaderProps> = React.memo(
  ({ onChangeSearchValue, searchValue }: NoteHeaderProps) => {
    const dispatch = useAppDispatch();
    const { notes } = useAppSelector(noteSelector);

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChangeSearchValue(e.target.value);
    };

    const handleRemoveNote = useCallback(() => {
      const selectedNote = notes.find((el) => el.isSelected);
      onChangeSearchValue('');
      dispatch(removeNote(selectedNote?.id));
    }, [dispatch, notes, onChangeSearchValue]);

    const handleAddNewNote = useCallback(() => {
      onChangeSearchValue('');
      dispatch(addNewNote({ ...defaultNote, id: v4() }));
    }, [dispatch, onChangeSearchValue]);

    return (
      <NoteHeaderContainer>
        <IconButton onClick={handleRemoveNote}>{DeleteIcon}</IconButton>
        <IconButton onClick={handleAddNewNote}>{AddNewNoteIcon}</IconButton>
        <SearchInput
          size="small"
          color="info"
          onChange={handleChangeSearch}
          value={searchValue}
        />
      </NoteHeaderContainer>
    );
  }
);
