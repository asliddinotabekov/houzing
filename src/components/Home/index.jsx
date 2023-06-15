import React from 'react'
import GenCarousel from '../Carousel'
import HouseCard from '../HouseCard'
import { Container } from './style'


const Home = () => {
  return (
    <Container>
       <GenCarousel></GenCarousel>
       <HouseCard></HouseCard>
    </Container>
  )
}

export default Home
