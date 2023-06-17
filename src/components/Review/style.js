import styled from 'styled-components';
import { start } from '../../assets/icons';

export const Container = styled.div`
  width: 100%;
  padding-bottom: 96px;
  padding-top: 48px;
  padding-bottom: 48px;
`;

export const Slide = styled.div`
  width: 100%;
  
`;

export const Div = styled.div`
display: flex;
flex-direction: ${(props) => props.dir};

`;

export const Icons = styled.div`
  
`;

Icons.Yulduz = styled(start)`
    height: 10px;
    width: 10px;
`

