import React from 'react'
import Product from '../components/Product/index'

const Shop = () => {
  return (
    <div>
        <div> {/* Sidebar */}
            <p>Search</p>
            <p>Filters</p>
        </div>
        <div>
            <div> {/* Dynamically rendered from database */}
              <Product />
            </div>
        </div>
    </div>
  )
}

export default Shop