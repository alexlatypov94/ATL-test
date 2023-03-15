import React from 'react';
import { getFirstAndSecondLines } from '../utils';
import {
  NoteDate,
  NoteDescription,
  NoteTabContainer,
  NoteTabDescriptionWrapper,
  NoteTitle,
} from './styles';

interface NoteTabProps {
  id: string;
  date: string;
  description: string;
  isSelected: boolean;
  onSelectNote: () => void;
}

export const NoteTab: React.FC<NoteTabProps> = React.memo(
  ({ id, date, description, isSelected, onSelectNote }: NoteTabProps) => {
    console.log('render NoteTab');
    const { firstLine, secondLine } = getFirstAndSecondLines(description);
    return (
      <NoteTabContainer id={id} $isSelected={isSelected} onClick={onSelectNote}>
        <NoteTitle>{firstLine || 'New Note'}</NoteTitle>
        <NoteTabDescriptionWrapper>
          <NoteDate>{date}</NoteDate>
          <NoteDescription>
            {secondLine || 'No additional text'}
          </NoteDescription>
        </NoteTabDescriptionWrapper>
      </NoteTabContainer>
    );
  }
);
