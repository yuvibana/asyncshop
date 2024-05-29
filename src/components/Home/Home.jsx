import React from 'react'
import ProductList from './productList'
import Filter from '../Filter'
import Search from '../Search'

function Home() {
    return (
        <div className='homepage flex'>
            <div className='leftBar w-[15%]'>
                <Filter />
                <Search />
            </div>
            <div className='rightBar w-[85%]'>
                <ProductList />
            </div>
        </div>
    )
}

export default Home