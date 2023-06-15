import styled from 'styled-components';
import { houses,  searchs, setting } from '../../assets/icons';

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px ;
  padding-bottom: 10px ;
  gap: 20px;
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
