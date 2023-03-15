import { Box } from '@mui/material';
import styled from 'styled-components';

export const NoteContainer = styled(Box)`
  display:flex;
  flex-direction: column;
  height: calc(100vh - 40px);
  margin 20px auto;
  border-radius: 24px;
  overflow: hidden;
`;
