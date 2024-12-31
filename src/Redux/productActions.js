import axios from 'axios';


export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const ADD_TO_CART = 'ADD_TO_CART';

// Action to fetch products
export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const { data } = await axios.get(
      'https://672a9094976a834dd023c8c4.mockapi.io/api/Hamzasports/products'
    );
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
  }
};

// Action to add a product to cart
export const addToCart = (productId) => {
  return {
    type: ADD_TO_CART,
    payload: productId,
  };
};
