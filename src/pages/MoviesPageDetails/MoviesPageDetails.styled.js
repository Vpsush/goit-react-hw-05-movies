import styled from 'styled-components';

export const StyledMoviesPageDetails = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  .error-bage {
    padding: 25px;
    border: 1px solid blue;
    background-color: orange;
    margin-bottom: 20px;
    font-size: 20px;
  }
  .return {
    margin-bottom: 10px;
  }
  .info {
    display: flex;
    flex-direction: row;
    gap: 20px;
    box-shadow: 10px 5px 5px grey;
    margin-left: 5px;
  }
`;
