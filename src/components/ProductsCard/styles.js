import styled from "styled-components";

export const LiContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 23rem;
  margin: 0;
  padding: 0;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 11rem;
    width: 9rem;
    background-color: #ffffff;
    -webkit-transition: -webkit-transform 0.4s ease;
    transition: transform 0.4s ease;

    :hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }

    @media (min-width: 1024px) {
      width: 100%;
    }
  }

  h3 {
    height: 2.5rem;
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
    border: 2px solid #27ae60;
    border-radius: 8px;
    cursor: pointer;
    background: linear-gradient(270deg, #18ee10, #4ef01f, #54e8c9);
    background-size: 600% 600%;
    -webkit-animation: AnimationName 5s ease infinite;
    animation: AnimationName 5s ease infinite;
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

  button:hover {
    transition: 400ms;
    border: 2px solid transparent;
    color: #212529;
  }

  @media (min-width: 1024px) {
    width: 28%;

    button {
      height: 3rem;
    }
  }
`;
