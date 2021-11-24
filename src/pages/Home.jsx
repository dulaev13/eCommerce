import React from 'react'
import Announcement from '../components/Announcement'
import Categoties from '../components/Categoties'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar style={{position:"absolute", zIndex: 33}}/>
            <Slider/>
            <Categoties/>
            <Products/>
        </div>
    )
}

export default Home
