import styled from 'styled-components';
import { del, edite, houses,  searchs, setting } from '../../assets/icons';
import { Select, Space } from 'antd';

const SelectAnt = styled(Select)`
  min-width: 200px;
  width: 100%;
  max-width: 200px;
  .ant-select-selector {
    height: 44px !important;
  }
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
  }
`;


export const SelectWrap = styled(Space)`
  
`;

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px ;
  padding-bottom: 10px ;
  gap: 20px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;

const Icons =styled.div`

`
Icons.Houses =styled(houses)`

`
Icons.Search =styled(searchs)`
margin-right: 8px;
color: white;
`

Icons.Setting =styled(setting)`
margin-right: 8px;
`



export const MenuWrapper = styled.div`
width: 100%;
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;

export const Section = styled.div`
  margin-bottom: 20px;
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
  justify-content: ${({ gap }) => (gap ? "space-around" : "start")};
  gap: 20px;
  display: flex;
`;


Icons.Ed = styled(edite)`
  width: 16px;
  height: 16px;
  cursor: pointer;
`

Icons.Del = styled(del)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  path{
    fill: red;
  }
  `

export {Container,Icons,SelectAnt}
