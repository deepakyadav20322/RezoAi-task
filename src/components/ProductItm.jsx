import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';
const ProductItm = ({product}) => {
  const dispatch = useDispatch();
const addIntoCart = () => {
   dispatch(addToCart(product));
   
}

  return (
    <div className='w-[16rem] h-[20rem] border border-gray-200 rounded-md shadow-md flex flex-col justify-between'>
        <Link to={`/product-details/${product.id}`} className='w-full h-3/4'>
        <img src={product.image} alt={product.name} className='w-full h-3/4 object-contain' />
        </Link>
        <div className='p-3 flex justify-between items-center '>
            
            <p className='text-sm font-medium'>${product.price}</p> 
            <h1 className='text-sm font-medium  text-yellow-700'>{product.rating.rate}</h1>
            </div>
            <button onClick={addIntoCart} className='bg-blue-500 text-white m-1'>Add to cart</button>
    </div>
  )
}

export default ProductItm