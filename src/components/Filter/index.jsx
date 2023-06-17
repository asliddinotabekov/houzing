import React,{useRef} from 'react'
import { Button, Input } from '../Generics'
import { AntSelect, Container ,Icons, MenuWrapper, Section} from './style'
import { Dropdown } from 'antd';
import { uzeReplace } from '../../hooks/useReplace';
import useSearch  from '../../hooks/useSearch'
import { useLocation, useNavigate } from 'react-router-dom';


const Filter = () => {

  const [data ,setData] = React.useState([])

  // ---------------useEffect portion ------------------//
  const onChangeCtg =(category_id)=>{
    console.log(category_id)
    navigate(`/properties${uzeReplace("category_id",category_id)}`)
  }

  const onChangeSort=(sort)=>{
    navigate(`/properties${uzeReplace("sort",sort)}`)
  }

  const url ="http://127.0.0.1:8081/api/v1/categories/list"
  React.useEffect(()=>{
    fetch(url,{
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  )
    .then((res)=>res.json())
    .then((res)=>setData(res.data))
  },[])
  
  const countRef =useRef()
  const regRef =useRef()
  const cityRef =useRef()
  const zipRef =useRef()
  const roomRef =useRef()
  // const sizeRef =useRef()
  const sortRef =useRef()
  const minRef =useRef()
  const maxRef =useRef()

  const navigate =useNavigate()
  const location =useLocation()
  const onChange =({target:{value,name}})=>{
    let news =uzeReplace(name,value)
    navigate(`${location.pathname}${news}`)
  }
  const query =  useSearch()

  
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
    <Input onChange={onChange} name="room" ref={roomRef} placeholder={'Rooms'}/>
    <AntSelect onChange={onChangeSort} ref={sortRef} defaultValue={query.get("sort") || 'Select Sort'}>
              <AntSelect.Option value='' >
                Select Sort
              </AntSelect.Option>
              <AntSelect.Option value='asc' >
                O'suvchi
              </AntSelect.Option>
              <AntSelect.Option value='desc' >
                Kamayuvchi
              </AntSelect.Option>
              
          
      </AntSelect>

      <AntSelect onChange={onChangeCtg}  defaultValue='Select Category'>
              <AntSelect.Option value='' >
                Select Category
              </AntSelect.Option>
        {
          data.map((value)=>{
            return(
              <AntSelect.Option value={value.id} key={value.id} >
                {value.name}
              </AntSelect.Option>
            )
          })
        }
      </AntSelect>
    </Section>
    <h1 className='subtitle'>Price</h1>
    <Section>
    <Input onChange={onChange} name="min_price" ref={minRef} placeholder={'Min price'}/>
    <Input onChange={onChange} name="max_price" ref={maxRef} placeholder={'Max  price'}/>
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
