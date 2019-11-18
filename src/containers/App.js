import React, { useState, useEffect } from 'react'

import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/styles/App.scss'

export default function App() {
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] })
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        (async function fetchData() {
            try {
                const response = await fetch("http://localhost:4001/initialState")
                const data = await response.json()
                setVideos(data)
                setLoading(false)
            } catch (error) {
                console.log(error.message)
            }
        })()

    }, [])

    return (
        <>
            <Header />
            <Search />
            {videos.mylist.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            }


            <Categories title="Tendencias">
                <Carousel>
                    {videos.trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Video">
                <Carousel>
                    {videos.trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>
            <Footer />
        </>
    )
}
