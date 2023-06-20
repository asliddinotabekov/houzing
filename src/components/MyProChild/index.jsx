import { Container, Content, Details, Img, Icons, Divider, Blur } from './style';
import noimg from '../../assets/img/noimg.jpeg';
import { useContext, useState } from 'react';
import { message } from "antd";
import { FavouriteContext } from '../../context/favourite';
import { Button } from '../Generics';

export const MyProChild = ({data = {},onClick}) => {
  const {id, address,country,city,houseDetails,price,attachments,salePrice , favorite
  } = data

  return (
    <Container onClick={onClick}>
      <Content>
        <div className='flex w-full'>
          <div className='relative'>
      <Blur><Button className="rounded-md info" w={71} h={23}><span className='btn'> FEATURE</span></Button></Blur>
      <Img src={(attachments && attachments[0]?.imgPath )|| noimg} />
          </div>
      <div className='ml-4 flex justify-between flex-col w-full'>
        <div className='flex justify-between'>
          <div><div className='subtitle ins'>{city}, {country}, </div>
        <div className='info'>{address || 'Quincy St, Brooklyn, NY, USA'} rooms {houseDetails?.room}</div></div>
          <Button type="dark" className="rounded-full mr-3 mt-[2px]"  w={71} h={23}><span className='btn'>FOR SALE</span></Button>
        </div>
        <div>
        <Details.Item footer='true'>
          <div className='info'><del>${price || "0"}/mo</del></div>
          <div className='subTitle'>${salePrice || "0"}/mo</div>
        </Details.Item>
        </div>
      </div>
        </div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className='info'>Bed {houseDetails?.beds || "0"}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className='info'>Bath {houseDetails?.bath || "0"}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className='info'>Garage {houseDetails?.garage || "0"} </div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className='info'>Ruler {houseDetails?.area  || "0"}kv</div>
          </Details.Item>
        </Details>
      </Content>
      
    </Container>
  );
  
};
export default MyProChild;

