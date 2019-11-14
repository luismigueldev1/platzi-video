import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Categories from './components/Categories'
import Carousel from './components/Carousel'
import CarouselItem from './components/CarouselItem'
import Footer from './components/Footer'

import './assets/styles/App.scss'

export default function App() {
    return (
        <>
            <Header/>
            <Search/>
            <Categories title="Recomendados para ti">
                <Carousel>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </Carousel>
            </Categories>

            <Categories title="Tus suscripciones">
                <Carousel>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </Carousel>
            </Categories>

            <Categories  title="Originales de Platzi Video">
                <Carousel>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </Carousel>
            </Categories>
            <Footer/>
        </>
    )
}
