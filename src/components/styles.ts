import { Box, TextareaAutosize, TextField, Typography } from '@mui/material';
import styled from 'styled-components';

interface NoteTabContainerProps {
  $isSelected: boolean;
}

export const NoteHeaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  background-color: rgb(38, 40, 42);
`;

export const NoteBodyContainer = styled(Box)`
  display: flex;
  flex: 1;
  background-color: rgb(30, 30, 30);
`;

export const NoteTabContainer = styled(Box)<NoteTabContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ $isSelected }) =>
    $isSelected ? '#c89632' : 'transparent'};
  transition: 0.3s linear;
  &:hover {
    background-color: #c89632;
  }
`;

export const NoteTabDescriptionWrapper = styled(Box)`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export const NoteDescription = styled(Typography)`
  && {
    font-size: 12px;
    line-height: 16px;
    color: #e1e1e1;
  }
`;

export const NoteTitle = styled(Typography)`
  && {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: #ffffff;
  }
`;
export const NoteDate = styled(Typography)`
  && {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #ffffff;
  }
`;

export const NoteTabListWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 20%;
  max-width: 30%;
  width: 100%;
  padding: 5px;
  border-right: 2px solid #e1e1e1;
`;

export const NoteInfoContainer = styled(Box)`
  width: 100%;
  max-width: 70%;
`;

export const NoteTextAreaView = styled(TextareaAutosize)`
  width: 100%;
  height: 100% !important;
  padding: 20px;
  font-size: 16px;
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
`;

export const SearchInput = styled(TextField)`
  & .MuiInputBase-input {
    color: #3b9ad5;
  }
  & .MuiInputBase-input .MuiOutlinedInput-root:hover.MuiOutlinedInput-notchedOutline{
    border-color: none;
  }
  & .MuiOutlinedInput-notchedOutline,
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #3b9ad5;
  }
`;
