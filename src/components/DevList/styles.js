import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;

  @media (max-width: 830px) {
    display: flex;
    flex-direction: column;
  }
`;
