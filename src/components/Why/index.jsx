import React, { useRef ,useEffect} from 'react'
import HouseCard from '../HouseCard'
import {  CarouselWrapper, Icons,  Container,Content, Wrapper } from './style'


const Why = () => {
 
  
  // ----------------- Carousel properties and func ----------------//
    const caruselRef =useRef()
    const next =()=> caruselRef.current.next()
    const prev =()=> caruselRef.current.prev()

    // ------------Navigate ------------------//

    
  return (

    <Container className='bg-red-400'>
      <Content>
        <h1 className="title">
          Why Choose Us
        </h1>
        <div className="info  ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis velit repellendus nihil.
        </div>
      </Content>
      <Wrapper >
        <Content>
          <Icons.Email/>
          <div className="subtitle mt-6">Trusted By Thousands</div>
          <div className="info  text-center max-w-[235px]">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</div>
        </Content>
        <Content>
          <Icons.CardHouse/>
          <div className="subtitle mt-6">Wide Renge Of Properties</div>
          <div className="info  text-center max-w-[235px]">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</div>
        </Content>
        <Content>
          <Icons.CardMaps/>
          <div className="subtitle mt-6">Financing Made Easy</div>
          <div className="info  text-center max-w-[235px]">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</div>
        </Content>
        <Content>
          <Icons.Calculator/>
          <div className="subtitle mt-6">See Neighborhoods</div>
          <div className="info  text-center max-w-[235px]">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</div>
        </Content>
      </Wrapper>
      
    </Container>
  
  )
}

export default Why