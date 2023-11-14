import styled from 'styled-components';

export const StyledApp = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  .title {
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 8px 16px;
    color: black;
    text-decoration: none;
    font-weight: 500;
    list-style: none;
    box-shadow: 10px 5px 5px grey;

    &.active {
      color: orangered;
    }
  }
  /* .error-bage {
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

  .loader {
    justify-content: center;
  }
  .additionalTitle {
    display: flex;
    flex-direction: column;
    box-shadow: 10px 5px 5px grey;
  }
  .info {
    display: flex;
    flex-direction: row;
    gap: 20px;
    box-shadow: 10px 5px 5px grey;
    margin-left: 5px;
  }
  .titleToday {
    text-decoration: none;
  }
  .header-link {
    color: blue;
    margin-bottom: 10px;
  } */
`;
