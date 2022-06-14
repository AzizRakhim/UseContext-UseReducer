import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";

import { ShopProvider } from "./ShopContext";
import Products from "./Products";
import Cart from "./Cart";
import "./App.scss";

const App = () => {
  return (
    <ShopProvider>
      <Wrapper>
        <TitleWrapper>
          <h1 className="text-center">Card/Shop</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </LinksWrapper>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Wrapper>
    </ShopProvider>
  );
};

export default App;

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #bb7250;

    :hover {
      color: #bb7250;
      font-weight: bold;
    }
  }
`;
