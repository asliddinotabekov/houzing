import React, { useRef ,useEffect} from 'react'
import HouseCard from '../HouseCard'
import {  CarouselWrapper, Icon,  Container,Content, Wrapper } from './style'


const Footer = () => {
 
  
  // ----------------- Carousel properties and func ----------------//
    const caruselRef =useRef()
    const next =()=> caruselRef.current.next()
    const prev =()=> caruselRef.current.prev()

    // ------------Navigate ------------------//

    
  return (

    <Container className=''>
      
        <Content>
        <Content.Title mr={120}>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Email /> Farxod kochasi, Chilonzor , 2-etaj, 1-hone,
          Well Education
        </Content.Item>
        <Content.Item>
          {' '}
          <Icon.Phone /> <span>+998 93 906 37 73 </span>
        </Content.Item>
        <Content.Item>
          <Icon.Email /> <span>webbrainacademy@gmail.com</span>
        </Content.Item>
        </Content>

        <Content >
        <Content.Title mr={60}>Wide Renge Of Properties</Content.Title>

        <Content.Item> Uzbekistan</Content.Item>
        <Content.Item> India</Content.Item>
        <Content.Item> UAE</Content.Item>
        <Content.Item> Korea</Content.Item>
      </Content>
      <Content>
        <Content.Title mr={90}> Financing Made Easy</Content.Title>

        <Content.Item>Frontend </Content.Item>
        <Content.Item>Backend </Content.Item>
        <Content.Item>Mobile </Content.Item>
        <Content.Item>Flutter </Content.Item>
        <Content.Item>Android </Content.Item>
      </Content>
      <Content>
        <Content.Title mr={110}>See Neighborhoods</Content.Title>

        <Content.Item>t.me/webbrain_admin</Content.Item>
        <Content.Item>t.me/webbrain_ceo</Content.Item>
        <Content.Item>instagram.com/webbrain_admin</Content.Item>
        <Content.Item>instagram.com/smd_94</Content.Item>
      </Content>
      
    </Container>
  
  )
}

export default Footer