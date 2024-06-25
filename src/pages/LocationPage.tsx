import styled from 'styled-components';
import axios from '../api'
import { useQuery } from '@tanstack/react-query';
import { ILocationsData } from '../types/location';
import LocationItem from '../components/Locations/LocationItem';


async function fetchData(): Promise<ILocationsData> {
  const response = await axios.get('/location');
  return response.data as ILocationsData
}

function LocationPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['locations'],
    queryFn: fetchData
  });

  console.log(data)


  if (isLoading) {
    return <h1>Loading</h1>
  }
  if (isError) {
    return <h1>Error</h1>
  }
  return (
    <Container>
      {data?.results.map(location => <LocationItem location={location} />)}
    </Container>
  );
}

export default LocationPage;

const Container = styled.div`
/* border: 1px solid red; */

  display: flex;
  /* align-items: center; */
  flex-wrap: wrap;
  gap: 15px;
  /* border: 1px solid red; */
`;