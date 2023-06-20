import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { logo } from '../../assets/icons';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
  /* background: blue; */

`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: green; */
  color: #ffff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  width: 100%;
  max-width: 1440px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && 'pointer'};

  .active {
    color: #b8ff06;
  }
`;



const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: #ffff;
`;

const Icon =styled.div`

`

Icon.Logo = styled(logo) `
  height: 36px;
  width: 30px;
`

const Menu = styled.div`
  width: 177px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 16px;
  gap: 16px;
  border-radius: 5px;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`;

Menu.Item = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  color: #000000;
`;


export { Container, Wrapper, Section, Icon, Link, Main,Menu, };

