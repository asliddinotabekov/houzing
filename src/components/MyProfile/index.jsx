import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FavouriteContext } from '../../context/favourite'
import { Container, Icons, Wrapper } from './style'


import { Table } from 'antd';
import { useEffect } from 'react';
import MyProChild from '../MyProChild'
import { Button } from '../Generics'
import useRequest from '../../hooks/useRequest';
import { useQuery } from 'react-query';






const MyProfile = () => {
  const request = useRequest()


// ---------- Column ---------------//
  const columns = [
    {
      key: 1,
      title:"Listing Title",
      render:(data)=><MyProChild data={data}/>,
      width:470
    },
    {
      key: 2,
      title:"year Build",
      render:(data)=><div> {data?.houseDetails.yearBuilt} years builded</div>,
      width:180
    },
    {
      key: 3,
      title:"Email",
      render:(data)=><div>{data?.user.email}</div>,
      width:280
  
    },
    {
      key: 3,
      title:"Price",
      render:(data)=><div>${data?.price}</div>
    },
    {
      key: 4,
      title:"Action",
      dataIndex:"",
      render:(data)=><div className='flex justify-between'><Icons.Ed onClick={(e)=>{e.stopPropagation();navigate(`/myprofile/edite-house/${data?.id}`)}}/><Icons.Del onClick={(e)=>{e.stopPropagation();onDelete(data?.id)}} /></div>,
      width:60
    },
  ];

  const navigate =useNavigate()
  const {search} =useLocation()
  const {data,refetch} = useQuery([],()=>{
    
   return request({url:"/houses/me",token:true,})
  },{
  }) 
  const onDelete = (id)=>{
    request({url:`/houses/${id}`,method:"DELETE" , token:true , }).then((res)=>{res.success && refetch()})
    
  }
  return (
    <div className=''>

    <Container >
    <div className='  w-full flex justify-between mb-3'>
      <div className="title text-start" style={{textAlign:"start"}}>My Profile</div>
    
        <Button onClick={()=>navigate('/myprofile/add-house')}> Add Houses</Button>
      </div>
      <Wrapper>

         <Table align="center" columns={columns} dataSource={data?.data} onRow={(record)=>{
          return {
            onClick:(event)=>{
              navigate(`/properties/${record?.id}`)
            }
          }
         }} size="middle" />
      </Wrapper>
    </Container>
      </div>
  )
}

export default MyProfile
