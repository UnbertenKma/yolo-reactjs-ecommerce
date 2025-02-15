import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import ProductViewModal from './ProductViewModal'

import Routes from '../routes/Routes'
import logo1 from "../assets/images/simsodeptuc36.vn.png";

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <img src={logo1} alt="" />
                    <Header {...props}/>
                    <div className="container">
                        <div className="main">
                            <Routes/>
                        </div>
                    </div>
                    {/* <Footer/> */}
                    <ProductViewModal/>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
