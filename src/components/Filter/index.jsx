import React,{useRef} from 'react'
import { Button, Input } from '../Generics'
import { Container ,Icons, MenuWrapper, Section} from './style'
import { Dropdown } from 'antd';
import { uzeReplace } from '../../hooks/useReplace';
import useSearch  from '../../hooks/useSearch'
import { useLocation, useNavigate } from 'react-router-dom';


const Filter = () => {
  const countRef =useRef()
  const regRef =useRef()
  const cityRef =useRef()
  const zipRef =useRef()
  const roomRef =useRef()
  const sizeRef =useRef()
  const sortRef =useRef()
  const minRef =useRef()
  const maxRef =useRef()

  const navigate =useNavigate()
  const location =useLocation()
  console.log(location);
  const onChange =({target:{value,name}})=>{
    let news =uzeReplace(name,value)
    navigate(`${location.pathname}${news}`)
  }
  console.log(uzeReplace("address", "tashkent"))
  const query =  useSearch()
  console.log(query.get("zip_code"),"searchhook")

  const menu =<MenuWrapper>
    <h1 className='subtitle'>Adress</h1>
    <Section className='pt-2.5'>
      <Input onChange={onChange}  ref={countRef} defaultValue={query.get("country")} name="country" placeholder={'Country'}/>
      <Input onChange={onChange}  ref={regRef} defaultValue={query.get("region")} name="region" placeholder={'Region'}/>
      <Input onChange={onChange}  ref={cityRef} defaultValue={query.get("address")} name="address" placeholder={'City'}/>
      <Input onChange={onChange}  ref={zipRef} defaultValue={query.get("zip_code")} name="zip_code" placeholder={'Zip code'}/>
    </Section>
    <h1 className='subtitle'>Appartment Info</h1>
    <Section className='pt-2.5'>
    <Input ref={roomRef} placeholder={'Rooms'}/>
      <Input ref={sizeRef} placeholder={'Size'}/>
      <Input ref={sortRef} placeholder={'Sort'}/>
    </Section>
    <h1 className='subtitle'>Price</h1>
    <Section>
    <Input ref={minRef} placeholder={'Min price'}/>
    <Input ref={maxRef} placeholder={'Max  price'}/>
    </Section>
  </MenuWrapper>
  return (

    <Container className=''>
      <Input icon={<Icons.Houses></Icons.Houses>} placeholder={"Enter an adress"}/>
      <Dropdown
      dropdownRender={()=>menu}
      trigger={[`click`]}
      placement='bottomRight'
      arrow={{ pointAtCenter: true }}
    >
      <div>
      <Button type={'light'}> <Icons.Setting/>Advanced</Button>
      </div>
    </Dropdown>
      <Button><Icons.Search/>Search</Button>
      </Container>

  )
}

export default Filter
