import styled from 'styled-components';
import { IEpisode } from '../../types/location';
import { Block } from '../shared/styled_UI';

interface Props {
  episode: IEpisode
}

function EpisodeItem({ episode }: Props) {
  return (
    <Container>
      <CardTitle>{episode.name}</CardTitle>
      <CardText>{episode.episode}</CardText>
      <Block justifyC>
        <CardText>{episode.air_date}</CardText>
      </Block>
    </Container>
  );
}

export default EpisodeItem;

const Container = styled.div`
  min-width: 300px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid rgba(1,1,1, 0.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  padding-bottom: 0;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;


const CardTitle = styled.span`
  font-size: 1.5rem;
  color: #333333;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #666666;
`;
