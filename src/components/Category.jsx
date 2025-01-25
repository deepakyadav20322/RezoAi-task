import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getAllCategories } from '../features/product/productSlice';
import { filterWithCategory } from '../features/product/productSlice';
const Category = () => {
    const dispatch = useDispatch();
    const {categories,status} = useSelector((state) => state.product);
    useEffect(() => {   
        dispatch(getAllCategories());
    }  ,[dispatch]);

    const handleCategoryFilter = (e) => {
        const category = e.target.textContent;
        dispatch(filterWithCategory(category));
    }

    if(status === 'loading') return (
        <div className='w-full flex flex-row justify-center item-center gap-x-6 py-2 mb-4 border-[1px]'>
         <div className='w-[6rem] h-[2rem] rounded-xl bg-gray-200'></div>
         <div className='w-[6rem] h-[2rem] rounded-xl bg-gray-200'></div>
         <div className='w-[6rem] h-[2rem] rounded-xl bg-gray-200'></div>
         <div className='w-[6rem] h-[2rem] rounded-xl bg-gray-200'></div>
         <div className='w-[6rem] h-[2rem] rounded-xl bg-gray-200'></div>
        
        </div>
    )
  return (
    <div className='w-full flex flex-row justify-center item-center gap-x-6 py-2 mb-4 border-[1px] border-black'>
      <button onClick={handleCategoryFilter} className='hover:text-blue-500 cursor-pointer'>all</button>
        {categories.map((category,id) => (
            <button onClick={handleCategoryFilter} className='hover:text-blue-500 cursor-pointer' key={id}>{category}</button>
        ))}
    </div>
  )
}

export default Category