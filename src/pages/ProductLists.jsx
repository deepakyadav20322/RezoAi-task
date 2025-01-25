import React, { useEffect,useState,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProductbySearch } from '../features/product/productSlice'; 
import ProductItm from '../components/ProductItm';
import ProductItmSkeleton from '../components/ProductItmSkeleton';
import {sortProducts} from '../features/product/productSlice';


const ProductLists = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const { products,filteredProducts, status, error } = useSelector((state) => state.product); 

  const handleChangeSorting = (e) => {
    const optionsData = e.target.value;
    const [shortValue, order] = optionsData.split('-');
    dispatch(sortProducts({ shortValue, order }));
  }; 

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if(searchValue === ''|| searchValue === '.'){
  //     alert('Please enter a search value');
  //     return;
  //   };
  //   dispatch(getProductbySearch(searchValue));
  // };

  // const handleSearchInputChange = (e) => {
  //   setSearchValue(e.target.value);
  // };


  const handleSearchInputChange = (e)=>{
    e.preventDefault()
    const inputValue  = e.target.value ;
        setSearchValue(inputValue);
        debouncedSearch(searchValue);
  }
        
  const debouncedSearch = useCallback((() => {
      let timer;
      function logic(value) {
        clearTimeout(timer);
        timer = setTimeout(() => {
         
          dispatch(getProductbySearch(value));
        }, 1000); 
      };
      return logic
    })(),
    [dispatch]
  );



  if (status === 'loading') return <p><ProductItmSkeleton/></p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className=' max-w-7xl mx-auto'>

            {/* search handling...   */}
            <div className='flex justify-end items-center p-4'>
            {/* <form onSubmit={handleDebounceSearch} className='Search'> */}
        <input placeholder='Search here...' type="text" value={searchValue} onChange={handleSearchInputChange} className='w-96 p-2 mr-2 rounded-2xl border-[1px]' />
        <button type="submit" className="border-[1px] p-2 rounded-xl mr-2 bg-blue-500 text-white">Submit</button>
      {/* </form> */}

        <label htmlFor="sort" className="mr-2 font-medium">Sort by:</label>
        <select
          id="sort"
          onChange={handleChangeSorting}
          className="p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="price-ascending">Price: Low to High</option>
          <option value="price-descending">Price: High to Low</option>
          <option value="rating-ascending">Rating: Low to High</option>
          <option value="rating-descending">Rating: High to Low</option>
        </select>
      </div>
      {filteredProducts.length==0?
      (<p className='text-center my-6 font-bold w-full'>No Product Found</p>):(
    <div className='grid grid-cols-4 gap-4 max-w-7xl mx-auto'>
      {
      filteredProducts.map((product) => (
        <ProductItm key={product.id} product={product} />
      ))}
    </div>)}
    </div>
  );
};

export default ProductLists;
