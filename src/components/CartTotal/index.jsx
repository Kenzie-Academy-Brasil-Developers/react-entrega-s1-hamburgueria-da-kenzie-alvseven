import { TotalPriceContainer } from "./styles";

export default function CartTotal({
  cartList,
  setCartList,
  toast,
  ToastContainer,
}) {
  const totalValue = cartList.reduce((acc, cv) => acc + cv.price, 0);

  const clearCart = () => {
    setCartList([]);
    toast.success("Todos os produtos foram removidos do carrinho!", {
      draggable: true,
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  return (
    <TotalPriceContainer>
      <h3>
        Valor total:{" "}
        {totalValue.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h3>
      <h4>Quantidade de produtos: {cartList.length}</h4>
      <button onClick={() => clearCart()}> Remover todos</button>
    </TotalPriceContainer>
  );
}
