import React, { useEffect } from 'react'
import { addToCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getProductbyId } from '../features/product/productSlice'

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const addInToCart = () => {
        dispatch(addToCart(product));
    }
   useEffect(() => {    
    dispatch(getProductbyId(id));
    }  ,[dispatch,id]);

    const {status, productDetail:product} = useSelector((state) => state.product);
    console.log(product);


    if(status === 'loading') return <p>Loading...</p>
  return (<div className='container mx-auto p-4'>
    <h1 className='text-lg font-bold text-center'>Product Details</h1>
    <div className='flex items-center justify-center gap-y-4'>
      
        <img src={product?.image} alt="" className='w-[20rem] h-[20rem]' />
        <div className='border-[1px] p-6 mx-4'>
            <h1 className='text-2xl font-semibold'>{product?.title}</h1>
            <p className='text-gray-600 font-semibold py-2` '>Price<span className=' text-red-600 px-2'>${product?.price}</span></p>
            <p className='text-gray-600'>{product?.description}</p>
            <div className='flex gap-x-2 '>
                <button onClick={addInToCart} className='bg-blue-500 text-white px-4 py-1 rounded-md'>Add to cart</button>
                <button className='bg-gray-200 text-black px-3 py-1 rounded-md'>Buy now</button>
                 
        </div>
        </div>
    </div>
    </div>
  )
}

export default ProductDetail