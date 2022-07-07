import { createContext, useReducer, useContext } from "react";
import shopReducer, { initialState } from "./shopReducer";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updatedCart = state.products.concat(product);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart
      }
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart
      }
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }

  return context;
};

export default useShop;