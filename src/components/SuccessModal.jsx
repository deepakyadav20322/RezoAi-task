import React from 'react'

const SuccessModal = () => {
  return (
    <div>
        <div className='absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center'>
            <div className=''>
                <div className=''>
                <h1 className=''>Success</h1>
                <p className=''>Your order has been placed successfully</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SuccessModal