import styled from 'styled-components';

export const StyledLayout = styled.div`
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

    &.hover .focus {
      color: orange;
    }
  }
`;
