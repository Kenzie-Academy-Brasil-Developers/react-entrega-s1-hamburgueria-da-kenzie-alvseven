import api from "./services/api";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { MainContainer } from "./styles";

function App() {
  const [listRender, setListRender] = useState([]);
  const [list, setList] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    api
      .get()
      .then((res) => {
        setListRender(res.data);
        setList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue !== "") {
      const searchedList = list.filter((produto) => {
        return (
          produto.name
            .toLowerCase()
            .trim()
            .includes(inputValue.toLowerCase().trim()) ||
          produto.category
            .toLowerCase()
            .trim()
            .includes(inputValue.toLowerCase().trim()) ||
          `${produto.price}`.trim().includes(inputValue.trim())
        );
      });

      setListRender(searchedList);
    } else {
      setListRender(list);
    }
  }, [inputValue, list, setListRender]);

  return (
    <>
      <Header setInputValue={setInputValue} />
      <MainContainer>
        <ProductsList
          listRender={listRender}
          cartList={cartList}
          setCartList={setCartList}
          inputValue={inputValue}
        />
        <Cart cartList={cartList} setCartList={setCartList} />
      </MainContainer>
    </>
  );
}

export default App;
