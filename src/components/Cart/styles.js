import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    min-width: 30%;
  }
`;

export const CartTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3.5rem;
  background-color: #27ae60;
  border-radius: 8px 8px 0 0;

  h2 {
    text-align: center;
    font-family: "Inter";
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
  }
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 12rem;
  gap: 2rem;
  margin: 0.5rem 0 2rem 0;
  padding: 0;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.6rem;
    background-color: #12b886;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    border: 5px solid slategray;
    background-color: slategray;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #12b886;
    border-radius: 10rem;
    border: 5px solid #12b886;
  }
`;

export const CartListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  gap: 0.5rem;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 8rem;
    height: inherit;
    -webkit-transition: -webkit-transform 0.6s ease;
    transition: transform 0.6s ease;
    background-color: whitesmoke;

    :hover {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
`;

export const CartListItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  h3 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 1rem;
    color: #333333;
    margin: 0.75rem 0 0 0;
    padding: 0;
    word-wrap: break-word;
    width: 80%;
  }

  p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 1rem;
    color: #828282;
  }

  span {
    font-size: 1rem;
    font-family: "Inter";
    font-weight: 400;
    font-size: 1rem;
    color: #27ae60;
  }

  button {
    width: 7rem;
    font-family: "Inter";
    font-weight: 600;
    font-size: 14px;
    margin-top: 0.5rem;
    padding: 0;
    color: #ffffff;
    border: 2px solid #27ae60;
    border-radius: 8px;
    cursor: pointer;
    background: linear-gradient(270deg, #10ffc1, #4ef01f, #54e8c9);
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
    transition: 500ms;
    border: 2px solid transparent;
    color: #ffffff;
  }
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
