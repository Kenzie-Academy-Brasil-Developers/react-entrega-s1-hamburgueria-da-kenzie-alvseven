import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  width: 90%;
  margin: 2rem auto;
  padding: 0;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
