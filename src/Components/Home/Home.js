import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'
import Services from '../Services/Services'
import SingleSection from '../SingleSection/SingleSection'

export default function Home() {
    return (
        <div>
            <Banner />
            <ProductList />
            <SingleSection />
            <Services />
        </div>
    )
}
