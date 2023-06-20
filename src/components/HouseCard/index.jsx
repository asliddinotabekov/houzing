import { Container, Content, Details, Img, Icons, Divider } from './style';
import noimg from '../../assets/img/noimg.jpeg';
import { useContext, useState } from 'react';
import { message } from "antd";
import { FavouriteContext } from '../../context/favourite';

export const HouseCard = ({data = {},onClick}) => {
  const {id, address,country,city,houseDetails,price,attachments,salePrice , favorite
  } = data

  const [{refetch,data_f}] = useContext(FavouriteContext)
  console.log(data_f,"Context data neew")

  const onLike =(event)=>{
    event?.stopPropagation();
    fetch(`http://127.0.0.1:8081/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,{
      method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },

    }).then(res=>res.json()).then((res) => {
      if (favorite) res?.success && message.warning("Successfully disliked");
      else res?.success && message.info("Successfully liked");
      refetch && refetch()
    });
  }
  return (
    <Container onClick={onClick}>
      <Img src={(attachments && attachments[0]?.imgPath )|| noimg} />
      <Content>
        <div className='subtitle ins'>{city}, {country}, </div>
        <div className='info'>{address || 'Quincy St, Brooklyn, NY, USA'} rooms {houseDetails?.room}</div>
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
      <Divider />
      <Content footer='true'>
        <Details.Item footer='true'>
          <div className='info'><del>${price || "0"}/mo</del></div>
          <div className='subTitle'>${salePrice || "0"}/mo</div>
        </Details.Item>
        <Details.Item row='true'>
          <Icons.Resize />
          <Icons.Love onClick={onLike}  fav={favorite}/>
        </Details.Item>
      </Content>
    </Container>
  );
  
};
export default HouseCard;

