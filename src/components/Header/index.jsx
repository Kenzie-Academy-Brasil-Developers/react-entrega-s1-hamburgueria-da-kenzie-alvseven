import { Container } from "./styles";

export default function Header({ setInputValue }) {
  return (
    <header>
      <Container>
        <img src="./logo.svg" alt="logo da kenzie burg" />
        <input
          type="text"
          placeholder="Pesquise por nome, preço ou categoria"
          onChange={(event) => setInputValue(event.target.value)}
        ></input>
      </Container>
    </header>
  );
}
