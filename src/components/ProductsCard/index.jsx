import { LiContainer } from "./styles";

export default function ProductCard({ product, addProduct }) {
  const { img, name, category, price, id } = product;
  const formatedValue = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <LiContainer>
      <img src={img} alt="imagem do produto" />
      <h3>{name}</h3>
      <p>{category}</p>
      <span>{formatedValue}</span>
      <button id={id} onClick={() => addProduct(product)}>
        Adicionar
      </button>
    </LiContainer>
  );
}
