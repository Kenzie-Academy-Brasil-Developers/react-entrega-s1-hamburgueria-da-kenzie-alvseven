import styled from "styled-components";

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: whitesmoke;

  h2 {
    font-family: "Inter";
    font-weight: 500;
    font-size: 1.49rem;
    color: #333333;
  }

  h4 {
    font-family: "Inter";
    font-weight: 600;
    font-size: 1rem;
    color: #333333;
  }

  button {
    width: 80%;
    height: 3rem;
    font-family: "Inter";
    font-weight: 600;
    font-size: 16px;
    color: #828282;
    background-color: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    cursor: pointer;

    :hover {
      transition: 500ms;
      background-color: #828282;
      color: #e0e0e0;
    }
  }
`;
