import React from 'react'
import ProductList from './productList'
import Filter from '../Filter'
import Search from '../Search'

function Home() {
    
    return (
        <div className='homepage container flex flex-wrap py-5 lg:px-0 px-2' >
            <div className='leftBar lg:w-[15%] w-[100%]'>
                <Filter />
                <Search />
            </div>
            <div className='rightBar lg:w-[85%] w-[100%]'>
                <ProductList />
            </div>
        </div>

    )
}

export default Home;