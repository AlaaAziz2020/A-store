import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { cartContext } from '../../Context/cartContext';
import Loadar from '../Loadar/Loadar';
import toast from 'react-hot-toast';
import Slider from "react-slick";
import '../Productdetails/Productdetails.css'


export default function ProductDetails() {
  const { addProductToCart } = useContext(cartContext);
  const { id, category } = useParams();
  const [details, setDetails] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const getProductDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://672a9094976a834dd023c8c4.mockapi.io/api/Hamzasports/products/${id}`
      );
      setDetails(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product details:', error);
      setLoading(false);
    }
  };

  const getRelatedProducts = async () => {
    try {
      const { data } = await axios.get(
        'https://672a9094976a834dd023c8c4.mockapi.io/api/Hamzasports/products'
      );
      const relatedIds = details?.relatedProducts || [];
      const filteredProducts = data.filter((product) =>
        relatedIds.includes(product.id)
      ).slice(0, 8);
      setRelatedProducts(filteredProducts);
    } catch (error) {
      console.error('Error fetching related products:', error);
    }
  };

  const addProductItem = async (productId) => {
    try {
      const response = await addProductToCart(productId);
      console.log(response); // Debug the response structure
  
      if (response?.createdAt) {
        toast.success('Product added to cart!', {
          duration: 4000,
          position: 'top-left',
        });
      } else {
        toast.error('Failed to add product to cart.', {
          duration: 4000,
          position: 'top-left',
        });
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      toast.error('An error occurred while adding the product to the cart.', {
        duration: 4000,
        position: 'top-left',
      });
    }
  };
  

  useEffect(() => {
    getProductDetails();
  }, [id]);

  useEffect(() => {
    if (details) getRelatedProducts();
  }, [details]);

  return (
    <div className="container">
      {isLoading ? (
        <Loadar />
      ) : (
        <div className="row mt-4">
          <div className="col-md-6 mt-4">
            <div>
              {/* <Slider {...settings}>
              {Array.isArray(details?.images) ? (
  details.images.map((src, index) => (
    <img src={src} key={index} className="" alt="Product Image" />
  ))
) : (
  <p>No images available</p>
)}


              </Slider> */}
              </div>
            <img
              src={details?.images || 'placeholder.jpg'}
              alt={details?.title || 'Product'}
              className="w-100"
            />
          </div>
          <div className="col-md-6 mt-3">
            <h1 >{details?.title}</h1>
            <p className='productsdetails-text'>{details?.description}</p>
            <button
              className="btn btn-success w-100 rounded-lg text-white bg-green-600 px-4"
              onClick={() => addProductItem(details?.id)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}

      {/* <div className="row mt-5">
        <h3>Related Products</h3>
        {relatedProducts.map((product) => (
          <div className="col-md-3" key={product.id}>
            <Link to={`/productDetails/${product.id}/${category}`}>
              <img
                src={product.images || 'placeholder.jpg'}
                alt={product.title || 'Product'}
                className="w-100"
              />
              <h4>{product.title}</h4>
              <p>{product.price} EGP</p>
            </Link>
          </div>
        ))}
      </div> */}
    </div>
  );
}
