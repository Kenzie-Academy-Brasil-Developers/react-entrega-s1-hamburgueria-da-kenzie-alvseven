import ProductCard from "../ProductsCard";
import { Container, UlContainer } from "./styles";

export default function ProductsList({
  listRender,
  inputValue,
  cartList,
  setCartList,
  toast,
  ToastContainer,
}) {
  const addProduct = (item) => {
    const product = cartList.find((product) => product.id === item.id);

    if (!product) {
      setCartList((prevItens) => [...prevItens, item]);
      toast.success("Produto adicionado ao carrinho!", {
        draggable: true,
        draggablePercent: 40,
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else {
      toast.error("O produto já existe no carrinho!", {
        draggable: true,
        draggablePercent: 40,
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      {inputValue !== "" ? (
        <Container>
          <h2>Exibindo resultados para: {inputValue}</h2>
          <UlContainer searched={true}>
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
