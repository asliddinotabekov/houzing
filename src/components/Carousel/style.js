import { Carousel } from 'antd';
import styled from 'styled-components';
import { arrow } from '../../assets/icons';

export const Wrapper = styled.div`
  height: 571px;
  position: relative;
`;

export const Icons = styled.div`
  
`;

Icons.Arrow =styled(arrow)`
position: absolute;
    width: 50px;
    height: 50px;
    padding: 20px;
    border-radius: 50%;
    background: rgba(255,255,255,0.3);
    top: 50%;
    cursor: pointer;
    &:hover{
        background: rgba(255,255,255,0.6);
    }
`

export const CarouselWrapper = styled(Carousel)`
    width: 100%;
    > .slick-dots li button {
    width: 6px;
    height: 6px;
    background: green;
    border-radius: 100%;
  }
  > .slick-dots li.slick-active button {
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background: blue;
    transform: scale(1.5,1.5);
    height: 1px;
    
  }`

  export const Img = styled.img`
    width: 100%;
    height: 571px;
  `;

  export const Blur = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.65);
  `;

  export const Content  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    position: absolute;
    color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `;
  
  Content.Desc =styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
  `


Content.Title =styled.h1`
color: inherit;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 44px;
line-height: 48px;
letter-spacing: -0.02em;
color: #FFFFFF;
`

Content.Price=styled.div`
    font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
/* identical to box height, or 129% */

letter-spacing: -0.02em;

color: #FFFFFF;
`