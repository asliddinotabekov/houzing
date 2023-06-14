import React,{useRef} from 'react'
import { Button, Input } from '../Generics'
import { Container ,Icons, MenuWrapper, Section} from './style'
import { Dropdown } from 'antd';


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
  const menu =<MenuWrapper>
    <h1 className='subtitle'>Adress</h1>
    <Section className='pt-2.5'>
      <Input  ref={countRef} placeholder={'Country'}/>
      <Input  ref={regRef} placeholder={'Region'}/>
      <Input  ref={cityRef} placeholder={'City'}/>
      <Input  ref={zipRef} placeholder={'Zip code'}/>
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
