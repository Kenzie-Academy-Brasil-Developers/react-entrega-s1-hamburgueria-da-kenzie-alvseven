import CartTotal from "../CartTotal";

import {
  CartContainer,
  CartTitleContainer,
  CartList,
  CartListItem,
  ImgContainer,
  CartListItemInfo,
  EmptyCartContainer,
} from "./styles";

export default function Cart({ cartList, setCartList }) {
  const removeProduct = (item) => {
    const newCart = cartList.filter((el) => el.id !== item.id);
    setCartList(newCart);
  };

  return (
    <CartContainer>
      <CartTitleContainer>
        <h2>Carrinho de compras</h2>
      </CartTitleContainer>
      <CartList>
        {cartList.length > 0 ? (
          cartList.map((product) => {
            const formatedValue = product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            });
            return (
              <CartListItem key={product.name}>
                <ImgContainer>
                  <img
                    src={product.img}
                    alt={`imagem do produto ${product.name}`}
                  />
                </ImgContainer>
                <CartListItemInfo>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                  <span>{formatedValue}</span>
                  <button
                    id={product.id}
                    onClick={() => removeProduct(product)}
                  >
                    Remover
                  </button>
                </CartListItemInfo>
              </CartListItem>
            );
          })
        ) : (
          <EmptyCartContainer>
            <h2>Seu carrinho está vazio</h2>
            <h4>Adicione itens</h4>
          </EmptyCartContainer>
        )}
      </CartList>
      {cartList.length > 0 && (
        <CartTotal cartList={cartList} setCartList={setCartList} />
      )}
    </CartContainer>
  );
}
