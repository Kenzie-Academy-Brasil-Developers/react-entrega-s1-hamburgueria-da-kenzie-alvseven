import styled from "styled-components";

export const LiContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  max-height: 20rem;
  margin: 0;
  padding: 0;

  img {
    min-height: 11rem;

    background-color: #e0e0e0;
    -webkit-transition: -webkit-transform 0.4s ease;
    transition: transform 0.4s ease;

    :hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  h3 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 1rem;
    color: #333333;
    margin: 1rem 0 0 0;
    padding: 0;
  }
  p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 0.75rem;
    color: #828282;
  }
  span {
    font-family: "Inter";
    font-weight: 600;
    font-size: 14px;
    color: #27ae60;
  }

  button {
    font-family: "Inter";
    font-weight: 600;
    font-size: 14px;
    margin-top: 0.5rem;
    padding: 0;
    color: #ffffff;
    background-color: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    cursor: pointer;
  }

  button:hover {
    transition: 500ms;
    color: #27ae60;
    background-color: #ffffff;
  }

  @media (min-width: 1024px) {
    width: 28%;
  }
`;
