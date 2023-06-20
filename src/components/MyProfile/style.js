import { Table } from 'antd';
import styled from 'styled-components';
import { del, edite } from '../../assets/icons';

const Container = styled.div`
    /* display: flex;
  flex-wrap: wrap;
  padding: var(--padding);
  gap: 20px; */
  /* justify-content: center; */
  /* display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px; */
  margin: auto;
  margin-top: 50px;
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;

 
`;

export const Wrapper = styled.div`
   
`;

export const AntTable = styled(Table)`
  
`;

export const Icons = styled.div`
  
`;


Icons.Ed = styled(edite)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  :hover{
    & path{
      fill: blue;
    }
  }
`

Icons.Del = styled(del)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  :hover{
    & path{
      fill: red;
    }
  }
`
export {Container}

