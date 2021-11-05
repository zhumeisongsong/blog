import styled from 'styled-components';

export const GridListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 767px) {
  }
`;

export const GridListItem = styled.div`
  flex-shrink: 0;
  width: 33.3%;
  img {
    width: 100%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;
