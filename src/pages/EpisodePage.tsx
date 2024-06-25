import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import axios from '../api'
import { IEpisodesData } from '../types/location';
import EpisodeItem from '../components/Episodes/EpisodeItem';

async function fetchEpisode(): Promise<IEpisodesData> {
  const { data } = await axios.get('episode');
  return data as IEpisodesData
}

function EpisodePage() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['episode'],
    queryFn: fetchEpisode
  })

  if (isLoading) {
    return <h1>Loading</h1>
  }
  if (isError) {
    return <h1>Error</h1>
  }

  return (
    <Container>
      {data?.results.map(episode => <EpisodeItem key={episode.id} episode={episode} />)}
    </Container>
  );
}

export default EpisodePage;

const Container = styled.div`
  /* border: 1px solid red; */

  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;