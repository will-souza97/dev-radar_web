import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: grid;
  grid-template-columns: 1fr 2fr;

  main {
    margin-left: 30px;
  }

  @media (max-width: 1045px) {
    display: flex;
    flex-direction: column;

    aside {
      width: 100%;
      position: relative;
      margin-bottom: 5px;
    }

    main {
      margin-left: 0;
      margin-top: 30px;
    }
  }
`;
