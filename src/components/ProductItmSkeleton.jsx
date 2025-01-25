import React from 'react';

const ProductItmSkeleton = () => {
  return (
    <div className='grid grid-cols-4 gap-4 max-w-7xl mx-auto'>
      {lengthData.map((data, index) => (
        
    <div key={index} className='w-[16rem] h-[18rem] border border-gray-200 rounded-md shadow-md flex flex-col justify-between animate-pulse'>
      <div className='w-full h-3/4 bg-gray-100 rounded-md'></div>

      <div className='p-3 flex justify-between items-center'>
        <div className='w-20 h-4 bg-gray-200 rounded-md'></div> 
        <div className='w-10 h-4 bg-gray-200 rounded-md'></div> 
      </div>
      </div>
      ))}
    </div>

  );
};

export default ProductItmSkeleton;

const lengthData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12];
