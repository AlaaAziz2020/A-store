import axios from "axios";
import { createContext, useState } from "react";

const headers = {
  token: localStorage.getItem('userToken'),
};
console.log("Token from localStorage:", headers.token); // Log the token

export const cartContext = createContext();

export function CartContextProvider({ children }) {
  const[cartNumber,setCartNumber] =useState(0)

  const addProductToCart = async (productId) => {
    try {
      const response = await axios.post(
        `https://67420c1fe4647499008fa0f3.mockapi.io/api/v1/cart`,
        { productId },
        { headers: headers }
      );
      console.log("Add Product Response:", response.data);
      setCartNumber(response.data.numberofcarts)
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("API Error:", error.response.data);
      } else if (error.request) {
        console.error("No Response:", error.request);
      } else {
        console.error("Error Setting Up Request:", error.message);
      }
      throw error;
    }
  };
  

  const getProductToCart = async () => {
    try {
      const response = await axios.get(
        `https://67420c1fe4647499008fa0f3.mockapi.io/api/v1/cart`,
        { headers }
      );
      console.log("get Product Response:", response.data);
      setCartNumber(response.data.numberofcarts)

      return response.data; // Ensure this matches the API output
    } catch (error) {
      console.error("Error fetching cart items:", error.response || error);
      throw error; // Propagate error for further handling
    }
  };
  

  const updateProductToCart = async (productId, count) => {
    try {
      const response = await axios.put(
        `https://67420c1fe4647499008fa0f3.mockapi.io/api/v1/cart/${productId}`,
        { count },
        { headers }
      );
      console.log("update API Response:", response);
      setCartNumber(response.data.numberofcarts)

      return response.data;
    } catch (error) {
      console.error('Error updating product in cart:', error);
      throw error;
    }
  };

  const deleteProductToCart = async (productId) => {
    try {
      const response = await axios.delete(
        `https://67420c1fe4647499008fa0f3.mockapi.io/api/v1/cart/${productId}`,
        { headers }
      );
      console.log("delete Product Response:", response.data);
      setCartNumber(response.data.numberofcarts)
      return response.data;
    } catch (error) {
      console.error('Error deleting product from cart:', error);
      throw error;
    }
  };

  return (
    <cartContext.Provider
      value={{ addProductToCart, getProductToCart, updateProductToCart, deleteProductToCart,cartNumber }}
    >
      {children}
    </cartContext.Provider>
  );
}
