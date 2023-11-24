import styled from 'styled-components';

export const StyledMoviesPage = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  .error {
    padding: 25px;
    border: 1px solid blue;
    background-color: orange;
    margin-bottom: 20px;
    font-size: 20px;
  }

  .SearchForm {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
  }
  .SearchFormButton {
    width: 20px;
    height: 20px;
    cursor: pointer;
    outline: none;
  }
`;
