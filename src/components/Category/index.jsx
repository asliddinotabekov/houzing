import React, { useRef ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import CategoryCard from '../CategoryCard'
import {  CarouselWrapper, Icons,  Container } from './style'


const Category = () => {
  // ---------------- State --------------//
  const [data ,setData] = React.useState([])

  // ---------------useEffect portion ------------------//
  const url ="http://127.0.0.1:8081/api/v1/categories/list"
  useEffect(()=>{
    fetch(url,{
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  )
    .then((res)=>res.json())
    .then((res)=> setData(res?.data))
  },[])
  
  // ----------------- Carousel properties and func ----------------//
    const caruselRef =useRef()
    const next =()=> caruselRef.current.next()
    const prev =()=> caruselRef.current.prev()

    // ------------Navigate ------------------//
    const navigate = useNavigate();

    
  return (

    <Container>
      <CarouselWrapper ref={caruselRef} pauseOnDotsHover={true} autoplay={true} swipeToSlide={true} slidesToShow={4}>
        {
          data.map((val)=>{
            return <CategoryCard onClick={() => navigate(`/properties?category_id=${val.id}`)} data={val}/>
          })
        }
      </CarouselWrapper> 
        <Icons.Arrow className="rotate-0 left-[20px] z-10" onClick={next}></Icons.Arrow>
      <Icons.Arrow className="rotate-[-180deg] right-[20px] z-10" onClick={prev}></Icons.Arrow>
    </Container>
  
  )
}

export default Category