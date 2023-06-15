import { Container, Content, Details, Img, Icons, Divider } from './style';
import noimg from '../../assets/img/noimg.jpeg';

export const HouseCard = ({data}) => {
  const { address,country,city,description,houseDetails,price,attachments,salePrice} = data
  return (
    <Container>
      <Img src={attachments[0].imgPath || noimg} />
      <Content>
        <div className='subtitle ins'>{city}, {country}, </div>
        <div className='info'>{address || 'Quincy St, Brooklyn, NY, USA'}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className='info'>Bed {houseDetails?.beds || "0000"}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className='info'>Bath {houseDetails?.bath || "00000"}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className='info'>Garage {houseDetails?.garage || "00000"} </div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className='info'>Ruler {houseDetails?.area  || "00000"}kv</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer='true'>
        <Details.Item footer='true'>
          <div className='info'><del>${price || "720.00"}/mo</del></div>
          <div className='subTitle'>${salePrice || "920.00"}/mo</div>
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