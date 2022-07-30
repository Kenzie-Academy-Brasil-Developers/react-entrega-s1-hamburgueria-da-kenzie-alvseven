import ProductCard from "../ProductsCard";

import { Container, UlContainer } from "./styles";

export default function ProductsList({
  listRender,
  inputValue,
  cartList,
  setCartList,
}) {
  const addProduct = (item) => {
    const product = cartList.find((product) => product.id === item.id);

    if (!product) {
      setCartList((prevItens) => [...prevItens, item]);
    }
  };

  return (
    <>
      {inputValue !== "" ? (
        <Container>
          <h2>Exibindo resultados para: {inputValue}</h2>
          <UlContainer>
            {listRender.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addProduct={addProduct}
              />
            ))}
          </UlContainer>
        </Container>
      ) : (
        <UlContainer>
          {listRender.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addProduct={addProduct}
            />
          ))}
        </UlContainer>
      )}
    </>
  );
}
