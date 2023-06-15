import { Carousel } from 'antd';
import styled from 'styled-components';
import { arrow } from '../../assets/icons';

export const Container = styled.div`
 display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  padding: 96px 130px;
  max-width: 1440px;
  width: 100%;
`;

export const Icons = styled.div`
`;

Icons.Arrow =styled(arrow)`
position: absolute;
    width: 50px;
    height: 50px;
    padding: 20px;
    border-radius: 50%;
    color: inherit;
   
    top: 50%;
    background: #FFFFFF;
  border: 1px solid #E6E9EC;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);

    cursor: pointer;
    &:hover{
        background: rgba(0,0,0,0.2);
    }
`



export const CarouselWrapper = styled(Carousel)`
    width: 100%;
    max-width: 1440px;
    
    > .slick-dots li button {
    width: 6px;
    height: 6px;
    background: blue;
    border-radius: 100%;
    margin-top: 42px;
  }
  > .slick-dots li.slick-active button {
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background: white;
    border: 1px solid blue;
    transform: scale(1.5,1.5);
    
  }
 
.slick-slide {
      padding-left: 20px;
      padding-right: 20px;
  }
  `



