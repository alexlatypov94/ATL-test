import React, { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  changeNote,
  filterEmptyNotes,
  noteSelector,
  selectNote,
} from '../store/noteSlice';
import { formatDate } from '../utils';
import { NoteTab } from './NoteTab';
import {
  NoteBodyContainer,
  NoteInfoContainer,
  NoteTabListWrapper,
  NoteTextAreaView,
} from './styles';

interface NoteBodyProps {
  searchValue: string;
}

export const NoteBody: React.FC<NoteBodyProps> = React.memo(
  ({ searchValue }: NoteBodyProps) => {
    const dispatch = useAppDispatch();
    const { notes } = useAppSelector(noteSelector);

    const handleSelectNote = useCallback(
      (id: string) => () => {
        const isAlreadySelected = id === notes.find((el) => el.isSelected)?.id;
        if (!isAlreadySelected) {
          dispatch(selectNote(id));
          dispatch(filterEmptyNotes());
        }
      },
      [dispatch, notes]
    );

    const selectedNote = useMemo(
      () => notes.find((el) => el.isSelected),
      [notes]
    );

    const handleChangeNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(
        changeNote({ id: selectedNote?.id, description: e.target.value })
      );
    };

    const noteList = useMemo(() => {
      if (searchValue) {
        return notes.filter((el) => el.description.includes(searchValue));
      }

      return notes;
    }, [notes, searchValue]);

    return (
      <NoteBodyContainer>
        <NoteTabListWrapper>
          {noteList.map(({ id, date, description, isSelected }) => (
            <NoteTab
              key={id}
              id={id}
              description={description}
              date={date || formatDate(new Date())}
              isSelected={isSelected}
              onSelectNote={handleSelectNote(id)}
            />
          ))}
        </NoteTabListWrapper>

        <NoteInfoContainer>
          {!!notes.length && (
            <NoteTextAreaView
              autoFocus
              onChange={handleChangeNote}
              value={selectedNote?.description}
            />
          )}
        </NoteInfoContainer>
      </NoteBodyContainer>
    );
  }
);
