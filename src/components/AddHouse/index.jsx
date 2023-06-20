import React from 'react'
import { Button, Input } from '../Generics'
import {  Container ,Icons, MenuWrapper, Section} from './style'
import { useFormik } from 'formik';
import useRequest from '../../hooks/useRequest';
import { Checkbox, } from "antd";
import TextArea from 'antd/es/input/TextArea';
import { ex_data } from '../../mock';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const AddHouse = () => {
  
  const navigate =useNavigate()
  const {id} =useParams()

  const [data ,setData] = React.useState([])
  const [ctgId ,setctgId] = React.useState(null)
  const [img ,setImg] = React.useState([])
  const [imgitem ,setImgitem] = React.useState([])
  
  const request = useRequest()
  const addImg =()=>{
    if(!(img.length >=18) && imgitem.length !== 0){
       setImg(
        [...img,{ imgPath: imgitem}]
      );
      setImgitem("")
    }
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
  console.log(data,"mana oshibka")

  },[])


  const [initail , setInitail] =useState({
    houseDetails: {},
    homeAmenitiesDto: {},
    componentsDto: {},
    status: true,

    locations: {
      latitude: 0,
      longitude: 0,
    },
    
  })
  
  
  const par =useParams()
  
  React.useEffect(()=>{
  id && request({url:`/houses/id/${par.id}`,token:true}).then((res)=>{setImg(res?.data?.attachments) ; setctgId(res?.data?.categoryId);setInitail({...res?.data});console.log(res,"Bu PUT uchun kelgan Data");console.log(res,"==============================");console.log(ex_data,"Namuna")})
  },[])
   
  const handleBoy=({target:{value}})=>{
      // let res = Number(value)
      setctgId(value)
  } 
 
  const formik = useFormik({
    initialValues:initail,
    enableReinitialize: true,
    onSubmit:(values)=>{
      console.log({...values, attachments: img,category:{name:ctgId}},"Handleeeeeeeeeeeeee");
      // console.log(ex_data)
      request({url:id? `/houses/${par.id}` :'/houses' , method:id ? "PUT":"POST", body:{...values , attachments: img,category:{name:ctgId}} ,token:true}).then((res)=> {if(res.success){navigate('/myprofile ')}})
    },
  })
  console.log(ctgId,"ctgId")
  return (

    <Container className=''>  
      <form action="" onSubmit={formik.handleSubmit}>
      <MenuWrapper>
    <h1 className='subtitle'>Adress</h1>
    <Section className='pt-2.5'>
      <Input onChange={formik.handleChange} name="address" value={formik.values.address} placeholder={'Address'}/>
      <Input onChange={formik.handleChange} name="country" value={formik.values.country} placeholder={'Country'}/>
      <Input onChange={formik.handleChange} name="region" value={formik.values.region} placeholder={'Region'}/>
      <Input onChange={formik.handleChange} name="city" value={formik.values.city} placeholder={'City'}/>
      <Input onChange={formik.handleChange} name="zipCode" value={formik.values.zipCode} placeholder={'Zip code'}/>
      {/* <Input onChange={formik.handleChange} name="category.name"   value={formik.values.category.name} placeholder={'Category'}/> */}
    </Section>
    <h1 className='subtitle'>Appartment Info</h1>
    <Section className='pt-2.5'>
    <Input type="number" onChange={formik.handleChange} name="houseDetails.area" value={formik.values.houseDetails.area}  placeholder={'area'}/>
    <Input type="number" onChange={formik.handleChange} name="houseDetails.bath" value={formik.values.houseDetails.bath}  placeholder={'bath'}/>
    <Input type="number" onChange={formik.handleChange} name="houseDetails.beds" value={formik.values.houseDetails.beds}  placeholder={'beds'}/>
    <Input type="number" onChange={formik.handleChange} name="houseDetails.garage" value={formik.values.houseDetails.garage}  placeholder={'garage'}/>
    <Input type="number" onChange={formik.handleChange} name="houseDetails.room" value={formik.values.houseDetails.room}  placeholder={'room'}/>
    <Input type="number" onChange={formik.handleChange} name="houseDetails.yearBuilt" value={formik.values.houseDetails.yearBuilt}  placeholder={'yearBuild'}/>
    
    <select
              name="categoryId"
              defaultValue={"Select Category"}
              onChange={handleBoy}
              typeof="number"
            >
              <option type="number" value={""}>Select Category</option>
              {data.map((value) => {
                return (
                  <option type="number" key={value.id}   >
                    {/* {value?.name} */}
                    {value?.id}
                  </option>
                );
              })}

            </select>
            <div className='text-red'>{ctgId}</div>
    </Section>
    <h1 className='subtitle'>Price</h1>
    <Section>
    <Input onChange={formik.handleChange} name="name" value={formik.values.name} placeholder={'Name'}/>

    <Input onChange={formik.handleChange} type="number" name="price" value={formik.values.price}  placeholder={'Price'}/>
    <Input onChange={formik.handleChange} type="number" name="salePrice" value={formik.values.salePrice}  placeholder={'Sale price'}/>
    </Section>
    <Section>
      <Input name="attachment" onChange={({target:{value}})=>setImgitem(value)} value={imgitem} placeholder="img url"/>
      <Button type={"button"} disabled={img.length >= 4 ? true : false}  onClick={addImg}>
              Add Image URL
            </Button>
      
      </Section>
      <Section flex>
       
        {img.map((value) => {
              return (
                <pre>
                  {value?.imgPath}{" "}
                  <Icons.Del
                    onClick={() => {
                      let res = img.filter((vl) => vl.id !== value.id);
                      setImg(res);
                    }}
                  />
                </pre>
              );
            })}
      </Section>
    <Section>
            <TextArea
              onChange={formik.handleChange}
              rows={6}
              placeholder="description"
              name="description"
            />
          </Section>
          <h1 className="subTitle">Additional</h1>


    <Section gap>
            <Section flex>
            <Input onChange={formik.handleChange} name="homeAmenitiesDto.additional" value={formik.values.additional}  placeholder={' additional'}/>

              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.busStop"
                >
                Bus Stop
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.garden"
              >
                Garden
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.market"
              >
                Market
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.park"
              >
                Park
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.parking"
              >
                Parking
              </Checkbox>
            </Section>
            <Section flex>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.school"
              >
                School
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.stadium"
              >
                Statium
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.subway"
              >
                Subway
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="homeAmenitiesDto.superMarket"
              >
                Super Market
              </Checkbox>
              <Input onChange={formik.handleChange} name="componentsDto.additional" value={formik.values.additional}  placeholder={' additional'}/>
              <Checkbox onChange={formik.handleChange} name="componentsDto.tv">
                TV
              </Checkbox>
            </Section>
            <Section flex>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.airCondition"
                >
                Air Condition
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.courtyard"
              >
                Courtyard
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.furniture"
              >
                Furniture
              </Checkbox>
              <Checkbox onChange={formik.handleChange} name="componentsDto.gasStove">
                Gas Stove
              </Checkbox>
              <Checkbox
                onChange={formik.handleChange}
                name="componentsDto.internet"
              >
                Internet
              </Checkbox>
            </Section>
          </Section>

  </MenuWrapper>
  <button className='submite' type='submit'>{id ?"Updata" :"Submite"}</button>
      </form>
      
      </Container>

  )
}

export default AddHouse
