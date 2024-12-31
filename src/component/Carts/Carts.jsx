import React, { useContext, useState, useEffect } from "react";
import { cartContext } from "../../Context/cartContext";
import "../Carts/Carts.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
export default function Carts() {
  const [cartItems, setCartItems] = useState(null);
  const { getProductToCart, updateProductToCart, deleteProductToCart } =
    useContext(cartContext);

  async function getCartItems() {
    try {
      const items = await getProductToCart();
      setCartItems(items);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
      setCartItems([]);
    }
  }

  async function updateProduct(id, countNumber) {
    try {
      const response = await updateProductToCart(id, countNumber);
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, count: countNumber } : item
        )
      );
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  }

  async function deleteProduct(id) {
    try {
      await deleteProductToCart(id);
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  }

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div>
      <section className="cart-table h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              {cartItems === null ? (
                <p>Loading...</p>
              ) : cartItems.length > 0 ? (
                cartItems.map((cart) => (
                  <MDBCard key={cart.id} className="card-registration">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol md="2">
                          <MDBCardImage src={cart.img} fluid alt="Product" />
                        </MDBCol>
                        <MDBCol md="3">
                          <h6>{cart.name}</h6>
                        </MDBCol>
                        <MDBCol md="3" className="text-end">
                          <button onClick={() => updateProduct(cart.id, cart.count - 1)}>-</button>
                          <input value={cart.count} readOnly />
                          <button onClick={() => updateProduct(cart.id, cart.count + 1)}>+</button>
                          <button onClick={() => deleteProduct(cart.id)}>Remove</button>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                ))
              ) : (
                <p>No items in the cart</p>
              )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}

