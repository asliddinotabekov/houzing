import styled from 'styled-components';
import { houses,  searchs, setting } from '../../assets/icons';
import { Select, Space } from 'antd';

export const AntSelect = styled(Select)`
  min-width: 250px;
  width: 100%;
  max-width: 250px;
  height: 44px;
  &:where(.css-dev-only-do-not-override-12jzuas).ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
  width: 100%;
  height: 44px;
  padding: 0 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
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
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;

export const Section = styled.div`
  margin-bottom: 20px;
  
  gap: 20px;
  display: flex;
`;

export {Container,Icons}
