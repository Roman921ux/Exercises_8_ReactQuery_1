import styled from 'styled-components';
import { IPlanet } from '../../types/location';
import { Block } from '../shared/styled_UI';

interface Props {
  location: IPlanet
}
function formatDate(isoDateString: string) {
  const date = new Date(isoDateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Месяцы в JavaScript нумеруются с 0
  const year = date.getFullYear();

  // Форматируем день и месяц, чтобы они имели двухзначное представление
  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;

  return `${formattedMonth}/${formattedDay}/${year}`;
}

function LocationItem({ location }: Props) {
  const isoDate = location.created;
  const formattedDate = formatDate(isoDate);
  return (
    <Container>
      <CardTitle>{location.name}</CardTitle>
      <CardText>{location.dimension}</CardText>
      <Block justifyC>
        <CardText>{location.type}</CardText>
        <CardText>{formattedDate}</CardText>
      </Block>
    </Container>
  );
}

export default LocationItem;

const Container = styled.div`
  min-width: 300px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid rgba(1,1,1, 0.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
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
