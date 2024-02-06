import React from 'react'

const Shop = () => {
  return (
    <div>
        <div> {/* Sidebar */}
            <p>Search</p>
            <p>Filters</p>
        </div>
        <div>
            <div> {/* Dynamically rendered from database */}
                <img src="" alt="NAME OF PLANT" />
                <p>Name</p>
                <p>Price</p>
                <button><img src="" alt="Shopping Cart" /></button>
            </div>
        </div>
    </div>
  )
}

export default Shop