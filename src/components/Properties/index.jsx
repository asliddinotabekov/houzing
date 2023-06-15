import React from 'react'
import { useLocation } from 'react-router-dom'
import HouseCard from '../HouseCard'
import { Container } from './style'

const Properties = () => {
  const {search} =useLocation()
  const [data, setData] = React.useState([])
  React.useEffect(()=>{
    fetch(`http://127.0.0.1:8081/api/v1/houses/list${search}`)
    .then((res)=>res.json())
    .then((res)=>{
     setData(res.data || [])
     console.log(res)
    })
  },[search])
  
  return (
    <Container>
      {
        data.map((val)=>{
        return  <HouseCard data={val} key={val.id}/>
        })
      }
    </Container>
  )
}

export default Properties
