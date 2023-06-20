import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { FavouriteContext } from '../../context/favourite'
import { FavouriteDataContext } from '../../context/favourite_data'
import HouseCard from '../HouseCard'
import { Container } from './style'

const Favourite = () => {
  const {search} =useLocation()
  const [,dispach] = React.useContext(FavouriteContext)

  const {data,refetch} = useQuery([search],async ()=>{
    let res = await fetch(`http://127.0.0.1:8081/api/v1/houses/getAll/favouriteList`,{
      headers:{
        "Content-Type":"application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
    return res.json()
  },{
    onSuccess:(res)=>{ dispach({type:"refetch", payload:refetch});dispach({type:"data", payload:data.data})}
  })

  return (
    <React.Fragment>
      <div className="title">Favourite</div>
      <div className="info text-center"> Menga yoqgan arzon va shinam uylar</div>
    <Container>
      {
        data?.data.map((val)=>{
          return  <HouseCard  data={val} key={val.id}/>
        })
      }
    </Container>
      </React.Fragment>
  )
}

export default Favourite
