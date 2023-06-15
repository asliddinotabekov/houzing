import styled from 'styled-components';
import { bath, bed, car, love, resize, ruler } from '../../assets/icons';

const Container = styled.div`
 border-radius: 13px;
width: 100%;
max-width: 280px;
min-width: 230px;

max-height: 380px;
min-height: 350px;

filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
  drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
  drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;

const Img = styled.img`
  width: 100%;
  border-radius: 13px;
  
`;

 const Content  = styled.div`
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
  font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
border-radius: 13px;
`;

const Icons = styled.div``;

const Blur = styled.div`
border-radius: 13px;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgba(0,0,0,0.65);
`;




export { Container,Img,Icons, Content ,Blur };