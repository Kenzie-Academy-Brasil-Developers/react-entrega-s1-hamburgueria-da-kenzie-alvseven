import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 7rem;
  gap: 1rem;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;

  input {
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    background-color: #ffffff;
    width: 15rem;
    height: 2rem;
    padding: 0 0 0 0.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 20rem;

    input {
      width: 19.5rem;
      height: 2.5rem;
    }

    input:hover {
      border: 1.5px solid green;
    }

    input:focus {
      color: #27be60;
    }
  }
`;
