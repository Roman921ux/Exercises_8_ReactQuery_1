import styled from 'styled-components';

interface IFlexBlock {
  flexD?: boolean;
  justifyC?: boolean;
  gap?: string;
}

export const FlexBlock = styled.div<IFlexBlock>`
  display: flex;
  flex-direction: ${props => props.flexD ? 'column' : ''};
  justify-content: ${props => props.justifyC ? 'space-between' : ''};
`
export const Block = styled.div<IFlexBlock>`
  display: flex;
  gap: ${props => props.gap};
  flex-direction: ${props => props.flexD ? 'column' : ''};
  justify-content: ${props => props.justifyC ? 'space-between' : ''};
`

