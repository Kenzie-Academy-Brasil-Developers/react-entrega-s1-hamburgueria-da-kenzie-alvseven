import { TotalPriceContainer } from "./styles";

export default function CartTotal({ cartList, setCartList }) {
  const totalValue = cartList.reduce((acc, cv) => acc + cv.price, 0);

  return (
    <TotalPriceContainer>
      <h2>Quantidade: {cartList.length}</h2>
      <h4>
        Valor total:{" "}
        {totalValue.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h4>
      <button onClick={() => setCartList([])}> Remover todos</button>
    </TotalPriceContainer>
  );
}
