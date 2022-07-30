import styled from "styled-components";

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: snow;
  border-top: 1px solid rgba(21, 0, 0, 0.4);

  h3 {
    font-family: "Noto Sans", sans-serif;
    font-weight: 600;
    font-size: 1.4rem;
    color: #303210;
  }

  h4 {
    font-family: "Noto Sans", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #303210;
  }

  button {
    width: 80%;
    height: 3rem;
    font-family: "Inter";
    font-weight: 600;
    font-size: 16px;
    color: #f1f1f1;
    background-color: slategray;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    cursor: pointer;

    :hover {
      background: linear-gradient(
        270deg,
        #ff0000,
        #ff7300,
        #fffb00,
        #48ff00,
        #00ffd5,
        #002bff
      );
      background-size: 1800% 1800%;

      -webkit-animation: AnimationName 9s ease infinite;

      animation: AnimationName 9s ease infinite;
    }

    @-webkit-keyframes AnimationName {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    @keyframes AnimationName {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`;
