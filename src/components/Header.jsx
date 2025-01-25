import React from 'react'
import { BiCartAdd } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

const Header = () => {

   const totalCartItems = useSelector((state) => state.cart.totalQuantity);
   console.log(totalCartItems)

  return (
    <header className='flex justify-between items-center p-4 max-w-7xl w-full mx-auto'>
      <div className='text-xl font-semibold'>My Cart</div>
      <div className='flex justify-center item-center gap-6'>
        <Link to="/" >Products</Link>
        <Link to="/cart" >Cart</Link>
        <div className="relative">
        
      <Link to="/cart">
      <BiCartAdd
        className="hover:text-blue-500 transition duration-200 ease-in-out cursor-pointer"
        size={28} 
      />
      </Link>

      {totalCartItems > 0 && (
        <span
          cla
          
          ssName="absolute -top-1 -right-2 flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg"
        >
          {totalCartItems}
        </span>
      )}
    </div>
    <div className=''>
    </div>
    </div>
    </header>
  )
}

export default Header