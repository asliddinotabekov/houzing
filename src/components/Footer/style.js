import { Carousel } from 'antd';
import styled from 'styled-components';
// import { email1 , calculator, cardHouse, cardMaps} from '../../assets/icons'
import { ReactComponent as email } from '../../assets/icons/email.svg';
import { ReactComponent as phone } from '../../assets/icons/phone.svg';


export const Container = styled.div`
 display: flex;
 height: 434px;
  /* align-items: center; */
  position: relative;
  padding: var(--padding);
  /* margin: auto; */
  width: 100%;
  padding: 48px 0;
  background: var(--colorPrimary);
  `;


export const Content = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* max-width: 235px; */
  width: 100%;
  justify-content: space-around;
  `;


Content.Title =styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
padding-right: ${({mr})=>mr?`${mr}px`:'0px'};
line-height: 24px;
margin-bottom: 32px;
color: #FFFFFF;
`


Content.Item =styled.div`
display: flex;
margin-bottom: 20px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
/* border: 1px solid red; */
align-items: center;
/* justify-content: center; */
font-size: 14px;
line-height: 20px;
max-width: 
256px;
width: 100%;
/* or 143% */


/* Color / 5 */

color: #FFFFFF;
`

export const Icon = styled.div`
`;
  
Icon.Email =styled(email)`
  margin-right: 21px;
  width: 54px;
  height: 54px;
  & path {
    fill: white;
  }
`

Icon.Phone =styled(phone)`
 margin-right: 21px;
  & path {
    fill: white;
  }
`



