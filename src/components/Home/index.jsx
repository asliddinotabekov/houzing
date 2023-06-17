import React from 'react'
import Banner from '../Banner'
import GenCarousel from '../Carousel'
import Category from '../Category'
import Recent from '../Recent'
import Recommended from '../Recommended'
import Why from '../Why'
import { Container } from './style'


const Home = () => {
  return (
    <Container>
       <GenCarousel></GenCarousel>
       <Recommended></Recommended>
       <Why/>
       <Category/>
       <Banner/>
       <Recent/>

    </Container>
  )
}

export default Home
