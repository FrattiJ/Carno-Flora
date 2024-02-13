import React from 'react'
import Product from '../components/Product/index'
import Search from '../components/Search/index'

const Shop = () => {
  return (
    <div className='lg:flex bg-[#bab5a1]'>
        <div className='flex justify-center p-4 lg:max-w-[25%]'>
          <Search />
        </div>
        <div className='w-full bg-[#DAD7CD]'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-12'> {/* Dynamically rendered from database */}
              <Product />
            </div>
        </div>
    </div>
  )
}

export default Shop