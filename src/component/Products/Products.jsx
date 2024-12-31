import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loadar from '../Loadar/Loadar';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetchProducts, addToCart } from '../../Redux/productActions';
import '../Products/Products.css';
import  Info from '../../component/Info/Info';

export default function Products() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.productState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId));
    toast.success('Product added to cart!', {
      duration: 4000,
      position: 'top-left',
    });
  };

  if (loading) return <Loadar />;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="container mt-5">
      {/* Carousel Section */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active" id="first"
          
          >
            <div className="carousel-caption">
              <h1>Welcome to Our Store</h1>
              <p className='text-white'>Find the best products here!</p>
            </div>
          </div>
          <div
            className="carousel-item"  id="second"
         
          >
            <div className="carousel-caption">
              <h1>Shirts Products</h1>
              <p className='text-white'>Don't miss our amazing discounts!</p>
            </div>
          </div>
          <div
            className="carousel-item" id="third"
           
          >
            <div className="carousel-caption">
               <h1>Shop Now</h1>
              <p className='text-white'>Explore our wide range of products.</p> 
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Products Section */}
      <div className="row flex flex-wrap px-4 justify-content-between mt-4">
        <h3 className='pt-3 text-center text-dark text-bold'>Our Products</h3>
        <p className='pt-3'>There are a lot of products as following:</p>
        {products.map((product) => (
          <div className="col-md-3 products-list px-4" key={product.id}>
            <div>
              <Link to={`/productDetails/${product.id}/${product.name}`}>
                <img
                  className="w-full"
                  src={product.images || 'placeholder.jpg'}
                  alt={product.name || 'Product'}
                />
                <span className="block text-xl font-light text-green-600">
                  {product.title}
                </span>
                <span className="text-lg font-semibold text-gray-700">
                  {product.name ? product.name.slice(0, 3) : 'N/A'}
                </span>
                <div className="d-flex justify-content-between">
                  <span>{product.price} EGP</span>
                  <span>
                    {product.rating}
                    <i className="fas fa-star text-warning" />
                  </span>
                </div>
              </Link>
              <button
                className="btn btn-success w-100 rounded-lg text-white bg-green-600 px-4"
                onClick={() => handleAddToCart(product.id)}
              >
                Add To Cart
              </button>
            </div>

          </div>
          
          
        ))}
                    
                    <Info />

      </div>
    </div>

  );
}
