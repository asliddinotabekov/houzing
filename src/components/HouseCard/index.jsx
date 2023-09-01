import { Container, Content, Details, Img, Icons, Divider } from './style';
import noimg from '../../assets/img/noimg.jpeg';
import { useContext, useState } from 'react';
import { message } from "antd";

export const HouseCard = (data, onClick) => {
  const { id, attributes, brand, category, merchant, name, image
  } = data.data

  console.log(data.data)


  return (
    <Container >
      <Img src={(image?.url) || noimg} />
      <Content>
        <div className='subtitle ins'>{brand}, {brand}, </div>
        <div className='info'>{merchant || 'Quincy St, Brooklyn, NY, USA'} </div>
        <Details>
          <Details.Item>

            <div className='info'>{attributes[0]?.name} : {attributes[0]?.value}</div>

          </Details.Item>
          <Details.Item>
            <div className='info'>{attributes[1]?.name} : {attributes[1]?.value}</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer='true'>
        <Details.Item footer='true'>
          <h2 className='info'>Phone Name :{name || "0"}</h2>
          <div className='subTitle'>Category : {category || "0"}</div>
        </Details.Item>
        <Details.Item row='true'>
          <Icons.Resize />
          {/* <Icons.Love onClick={onLike} fav={favorite} /> */}
        </Details.Item>
      </Content>
    </Container>
  );

};
export default HouseCard;

