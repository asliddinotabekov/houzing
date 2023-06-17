import { Container, Content, Details, Img, Icons, Divider } from './style';
import noimg from '../../assets/img/noimg.jpeg';

export const HouseCard = ({data = {},onClick}) => {
  const { address,country,city,houseDetails,price,attachments,salePrice} = data
  return (
    <Container onClick={onClick}>
      <Img src={(attachments && attachments[0].imgPath )|| noimg} />
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
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;

