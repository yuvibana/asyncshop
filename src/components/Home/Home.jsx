import React from 'react'
import ProductList from './productList'
import Filter from '../Filter'

function Home() {
    return (
        <div>
            <ProductList />
            <Filter />
        </div>
    )
}

export default Home