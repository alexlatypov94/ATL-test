import { Container } from '@mui/material';
import { useCallback, useState } from 'react';
import { NoteBody, NoteHeader } from './components';
import { NoteContainer } from './styles';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearchValue = useCallback(
    (value: string) => setSearchValue(value),
    []
  );

  return (
    <Container>
      <NoteContainer>
        <NoteHeader
          onChangeSearchValue={handleChangeSearchValue}
          searchValue={searchValue}
        />
        <NoteBody searchValue={searchValue} />
      </NoteContainer>
    </Container>
  );
}

export default App;
