import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FavouriteContext } from '../../context/favourite'
import HouseCard  from '../HouseCard'
import { Container } from './style'

const Properties = () => {
  const navigate =useNavigate()
  const [{data_f}] = useContext(FavouriteContext)
  console.log(data_f, "DT CON");
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
    // let mapss =data.map((val,index)=>{
    //   let res =data.filter((item)=>item.id !== data_f[index].id)
      //  return res
    // })
    // console.log(mapss,"mapss")
 
  return (
    <React.Fragment>
      <div className="title">Proporties</div>
      <div className="info text-center">Arzon va shinam uylar</div>
    <Container>
      {
       
      }
      {
        data.map((val)=>{
          return  <HouseCard  onClick={() => navigate(`/properties/${val.id}`)} data={val} key={val.id}/>
        })
      }
    </Container>
      </React.Fragment>
  )
}

export default Properties
