import styled from "styled-components";

import useShop from "./ShopContext";
import ProductCard from "./ProductCard.js";

const Cart = () => {
  const { products, total } = useShop();

  return (
    <>
      <Title>Your cart total is {total}.00$</Title>
      <ProductsWrapper>
        {products.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};

export default Cart;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

const ProductsWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 20px;
`;
