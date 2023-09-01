import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HouseCard from '../HouseCard'
import { Container } from './style'

const Properties = () => {
  const navigate = useNavigate()
  // console.log(data_f, "DT CON");
  const { search } = useLocation()
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    fetch(`http://127.0.0.1:8000/offer/`)
      .then((res) => res.json())
      .then((res) => {
        setData(res || [])
      })
  }, [])

  return (
    <React.Fragment>
      <div className="title">Proporties</div>
      <div className="info text-center">Arzon va shinam uylar</div>
      <Container>
        {

        }
        {
          data.map((val) => {
            return <HouseCard onClick={() => navigate(`/properties/${val.id}`)} data={val} key={val.id} />
          })
        }
      </Container>
    </React.Fragment>
  )
}

export default Properties
