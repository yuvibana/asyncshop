import React from 'react'
import Header from './components/HeaderFooter/Header'
import Footer from './components/HeaderFooter/Footer'
import { Outlet } from 'react-router'

function LayOut() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default LayOut