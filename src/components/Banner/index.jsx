import React, { useRef } from 'react'
import { Blur, CarouselWrapper, Icons, Img, Wrapper ,Content} from './style'
import { house1,house2 } from '../../assets/img';
import {Button} from '../Generics/Button'

// const contentStyle = {
//     margin: 0,
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
//   };

const GenCarousel = () => {
   


   

  return (
    <Wrapper>
        
    <Img src={house1}/>
  <Blur/>
    <Content>
        <Content.Title>Vermont Farmhouse With Antique Jail Is
the Week's Most Popular Home</Content.Title>
<Button className='mt-12' w={"180"} h={"44"}>Read More</Button>
    </Content>
</Wrapper>
  
  )
}

export default GenCarousel