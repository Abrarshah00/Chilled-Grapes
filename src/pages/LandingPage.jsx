import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Description from '../components/Description'
import ProductList from '../components/ProductList'

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Description />
            <ProductList />
            <Footer />
        </div>
    )
}

export default LandingPage