import React, { useRef } from 'react'
import { Blur, CarouselWrapper, Icons, Img, Wrapper ,Content} from './style'
import { house1,house2 } from '../../assets/img';

// const contentStyle = {
//     margin: 0,
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
//   };

const GenCarousel = () => {
   

    const caruselRef =useRef()

    const next =()=> caruselRef.current.next()
    const prev =()=> caruselRef.current.prev()


    const onChange = () => {
        
      };
  return (
    <Wrapper>
       <CarouselWrapper ref={caruselRef} afterChange={onChange}>
        
    <Img src={house1}/>
    <Img src={house2}/>
  </CarouselWrapper> <Blur/>
    <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
        <Content.Price>$5,250/mo</Content.Price>
    </Content>
  <Icons.Arrow className="rotate-0 left-[20px]" onClick={next}></Icons.Arrow>
  <Icons.Arrow className="rotate-[-180deg] right-[20px]" onClick={prev}></Icons.Arrow></Wrapper>
  
  )
}

export default GenCarousel