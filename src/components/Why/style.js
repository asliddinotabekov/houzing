import { Carousel } from 'antd';
import styled from 'styled-components';
import { email , calculator, cardHouse, cardMaps} from '../../assets/icons'


export const Container = styled.div`
 display: flex;
 height: 434px;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: auto;
  /* max-width: 1440px; */
  width: 100%;
  padding: 48px 0;
  background: #f5f7fc;
  `;


export const Content = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* max-width: 235px; */
  width: 100%;
  `;


export const Wrapper = styled.div`
padding-bottom: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 130px;
  padding-right: 130px;
  max-width: 1440px;
  width: 100%;
`;


export const Icons = styled.div`
`;
  
Icons.Email =styled(email)`
& path {
  fill: #0061DF;
}
`

Icons.Calculator =styled(calculator)`
`
Icons.CardHouse =styled(cardHouse)`
`
Icons.CardMaps =styled(cardMaps)`
`
