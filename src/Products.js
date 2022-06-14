import styled from "styled-components";

import { shopData } from "./ShopData.js";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <>
      <Title>Welcome to the Movies Hall</Title>

      <ProductsWrapper>
        {shopData.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};

export default Products;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
`;

const ProductsWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 20px;
`;