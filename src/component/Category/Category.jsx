// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Loadar from '../Loadar/Loadar';
// import { Link } from 'react-router-dom';

// export default function Category(props) {
//   let category = props.categoryName;
//   // let categoryId = props.categoryId; // Add this line to get categoryId from props
//   console.log(props);
  
//   const [products, setProducts] = useState([]);
//   const [isLoading, setLoading] = useState(true);

//   // async function getRelatedCategories() {
//   //   if (!categoryId) {
//   //     console.error('categoryId is undefined');
//   //     setLoading(false);
//   //     return;
//   //   }
  
//   //   try {
//   //     const { data } = await axios.get(`http://localhost:5000/products/category/${categoryId}`);
//   //     console.log(data); // Log the fetched data
  
//   //     // Filter products based on the passed category name
//   //     let related = data.filter(prod => prod.category.name === category);
//   //     setProducts(related);
//   //   } catch (error) {
//   //     console.log(`Fetching related products for category ID: ${categoryId}`);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // }

//   // useEffect(() => {
//   //   getRelatedCategories();
//   // }, [categoryId]);

//   // useEffect(() => {
//   //   getRelatedCategories();
//   // }, [categoryId]); // Add categoryId as a dependency

//   return (
    
//     <div className='container'>
//       { 
//       isLoading ? (
//          // Renders the loader if data is still being fetched
//       <Loadar />
//          ) : ( 
//         <div  className='row flex flex-wrap px-4 justify-content-between '>
//           {products.map((product) => {
//             return (
//               <div className='col-md-3 products-list px-4'  key={product.id}>
//  <div className=''>
//  <Link to={`/productDetails/${product.id}/${product?.category?.title}`}>
//  <img className='w-full' src={product.img} alt={product?.title} />
//                 <span className='block text-xl font-light text-green-600'>
//                   {product.title}
//                 </span>
//                 <span className='text-lg font-semibold text-gray-700'>
//                 {product.title ? product.title.slice(0, 3) : 'N/A'} {/* Ensure product.title exists */}
//                 </span>
//                 <div className='d-flex justify-content-between'>
//                   <span>{product.price} EGP</span>
//                   <span>{product.rating}<i className='fas fa-star text-warning' /></span>
//                 </div>
//             </Link>  
//             <button className="btn btn-success w-100 rounded-lg text-white bg-green-600 px-4">Add To Cart</button>

//  </div>
           
//  </div>  
//             )
//           })}
//         </div>
//        )} 
//     </div>
//   );
// }
import React from 'react'

export default function Category() {
  return (
    <div>
      
    </div>
  )
}
