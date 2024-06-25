import styled from 'styled-components';
import { ICharacter } from '../../types/location';
import { Block } from '../shared/styled_UI';

interface Props {
  character: ICharacter
}

function CharacterItem({ character }: Props) {

  return (
    <Container>
      <IMGBlock><Img src={character.image} /></IMGBlock>
      <Block flexD gap='5px' style={{ padding: '15px', }}>
        <CardTitle>{character.name}</CardTitle>
        <Block justifyC>
          <CardText>{character.gender} - {character.species}</CardText>
          <CardText>{character.status}</CardText>
        </Block>
        <CardText>{character.location.name}</CardText>
      </Block>
    </Container>
  );
}

export default CharacterItem;

const Container = styled.div`
  width: 300px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid rgba(1,1,1, 0.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;


const CardTitle = styled.span`
  font-size: 1.5rem;
  color: #333333; 
`;

const CardText = styled.span`
  font-size: 1rem;
  color: #666666;
`;

const IMGBlock = styled.div`
  
`;

const Img = styled.img`
  border-radius: 5px;
`;