import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UlContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 2.5rem;
  list-style-type: none;
  margin: 0;
  padding: 0 0 1.5rem 0;

  ::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    background-color: #12b886;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    border: 3px solid slategray;
    background-color: slategray;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #12b886;
    border-radius: 10rem;
    border: 4px solid #12b886;
  }

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    gap: 2.5rem;
    overflow: hidden;
    min-width: 70%;
  }
`;
