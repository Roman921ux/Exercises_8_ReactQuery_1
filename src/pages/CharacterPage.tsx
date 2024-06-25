import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import axios from '../api'
import { ICharactersData } from '../types/location';
import CharacterItem from '../components/Character/CharacterItem';

function CharacterPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['character'],
    queryFn: async (): Promise<ICharactersData> => {
      const { data } = await axios.get('character')
      return data as ICharactersData
    }
  });

  if (isLoading) {
    return <h1>Loading</h1>
  }
  if (isError) {
    return <h1>Error</h1>
  }

  return (
    <Container>
      {data?.results.map(character => <CharacterItem key={character.id} character={character} />)}
    </Container>
  );
}

export default CharacterPage;

const Container = styled.div`
    /* border: 1px solid red; */

  display: flex;
  flex-wrap: wrap;
  gap: 15px; 
`;