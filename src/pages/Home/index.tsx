import { useEffect, useState } from "react";
import { Button, Input } from "../../components";
import { api } from "../../services";
import * as S from "./style";

interface ListProps {
  _id: string;
  amount: number;
  price: number;
  name: string;
}

export const Home = () => {
  const [futureProductsList, setFutureProductList] = useState<ListProps[]>([]);
  const [listPurcheses, setListPurcheses] = useState<ListProps[]>([]);
  const [valueInputAddFutureList, setValueInputAddFutureList] = useState("");
  const [valueAmountAddFutureList, setValueAmountAddFutureList] = useState(1);

  const [valueInputFutureList, setValueInputFutureList] = useState("");
  const [haveConnection, setHaveConnection] = useState(false);
  const [invalidValue, setInvalidValue] = useState(false);

  const checkConnection = (status: unknown) => {
    const msgError = (status as Error).message;
    if (msgError === "Network Error") {
      setHaveConnection(true);
    }
  };

  const handleGetFutureProductsList = async () => {
    try {
      const response = await api.get("/futurePurchases");

      if (response.status === 200) {
        haveConnection && setHaveConnection(false);
        setFutureProductList(response.data);
      }
    } catch (error) {
      checkConnection(error);
      console.log(error);
    }
  };

  const handleGetListPurcheses = async () => {
    try {
      const response = await api.get("/listPurchases");

      if (response.status === 200) {
        haveConnection && setHaveConnection(false);
        setListPurcheses(response.data);
      }
    } catch (error) {
      checkConnection(error);
      console.log(error);
    }
  };

  const handleDeleteProductFutureList = async (id: string) => {
    try {
      const response = await api.delete(`/futurePurchases/${id}`);

      if (response.status === 200) {
        haveConnection && setHaveConnection(false);
        handleGetFutureProductsList();
      }
    } catch (error) {
      checkConnection(error);
      console.log(error);
    }
  };

  const handleDeleteProductList = async (id: string) => {
    try {
      const response = await api.delete(`/listPurchases/${id}`);

      if (response.status === 200) {
        haveConnection && setHaveConnection(false);
        handleGetFutureProductsList();
        handleGetListPurcheses();
      }
    } catch (error) {
      checkConnection(error);
      console.log(error);
    }
  };

  const handleAddProduct = async () => {
    const checkRepeatedValue = futureProductsList
      .map((product) => valueInputAddFutureList == product.name)
      .find((product) => product);

    console.log(checkRepeatedValue);

    if (checkRepeatedValue || valueInputAddFutureList.length === 0) {
      setInvalidValue(true);
      return;
    }

    try {
      const response = await api.post("/futurePurchases", {
        name: valueInputAddFutureList,
        amount: valueAmountAddFutureList,
      });

      if (response.status === 201) {
        handleGetFutureProductsList();
        setValueInputAddFutureList("");
        setValueAmountAddFutureList(1);
        setInvalidValue(false);
      }
    } catch (error) {
      checkConnection(error);
      console.log(error);
    }
  };

  const handleAddProductPurchases = async (
    name: string,
    price: number | string,
    amount: number
  ) => {
    try {
      const response = await api.post("/listPurchases", {
        name: name,
        amount: amount,
        price: price,
      });

      if (response.status === 201) {
        handleGetListPurcheses();
        setValueInputFutureList("");
      }
    } catch (error) {
      checkConnection(error);
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetFutureProductsList();
    handleGetListPurcheses();
  }, []);

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        {haveConnection && <S.Error>Sem conexão!</S.Error>}
        <h2>Adicionar produtor na lista</h2>

        <S.ProductWrapper>
          <Input
            placeholder="nome do produto"
            value={valueInputAddFutureList}
            onChange={(e) => setValueInputAddFutureList(e.target.value)}
            invalidValue={invalidValue}
          />

          <S.ButtonsWrapper>
            <S.ButtonsWrapper amount>
              <Button
                onClick={() =>
                  valueAmountAddFutureList > 1 &&
                  setValueAmountAddFutureList((current) => current - 1)
                }
                paddingNone
              >
                -
              </Button>
              <span>{valueAmountAddFutureList}</span>
              <Button
                onClick={() =>
                  setValueAmountAddFutureList((current) => current + 1)
                }
                paddingNone
              >
                +
              </Button>
            </S.ButtonsWrapper>

            <Button onClick={handleAddProduct}>Adicionar</Button>
          </S.ButtonsWrapper>
        </S.ProductWrapper>
      </S.ContentWrapper>

      <S.ContentWrapper>
        <h2>Lista de futuras compras</h2>
        {futureProductsList.map((product) => (
          <S.ProductWrapper key={product._id}>
            <p>{product.name}</p>
            <Input
              type="number"
              placeholder="Preço Un."
              min={0}
              value={product.price}
              onChange={(e) => setValueInputFutureList(e.target.value)}
            />
            <S.ButtonsWrapper>
              <span>{product.amount}</span>
              <Button
                onClick={() => (
                  handleAddProductPurchases(
                    product.name,
                    Number(valueInputFutureList) * product.amount,
                    product.amount
                  ),
                  handleDeleteProductFutureList(product._id)
                )}
              >
                &#10004;
              </Button>
            </S.ButtonsWrapper>
          </S.ProductWrapper>
        ))}
      </S.ContentWrapper>

      <S.ContentWrapper>
        <h2>Lista de Compras</h2>
        {listPurcheses.map((product) => (
          <S.ProductWrapper key={product._id}>
            <p>{product.name}</p>

            <p>{`R$ ${product.price}`}</p>
            <S.ButtonsWrapper>
              <span>Qtde: {product.amount}</span>

              <Button onClick={() => handleDeleteProductList(product._id)}>
                &#10005;
              </Button>
            </S.ButtonsWrapper>
          </S.ProductWrapper>
        ))}
        <S.Amount>
          <span>
            Total: R${" "}
            {listPurcheses.reduce(
              (accumulator, product) => accumulator + product.price,
              0
            )}
          </span>
        </S.Amount>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
