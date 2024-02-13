import React from 'react'
import Product from '../components/Product/index'
import Search from '../components/Search/index'

const Shop = () => {
  return (
    <div>
        <div className='flex justify-center'>
          <Search />
        </div>
        <div>
            <div className='justify-center grid sm:grid-cols-2 gap-12'> {/* Dynamically rendered from database */}
              <Product />
            </div>
        </div>
    </div>
  )
}

export default Shop