import { Dropdown } from 'antd'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import { Container, Icon, Link, Main, Section, Wrapper, Menu } from './style'




const Navbar = () => {

  //   useEffect(()=>{
  //     fetch('http://127.0.0.1:8081/api/public/auth/login',{
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },

  //       body: JSON.stringify({
  //         email: "admin@gmail.com",
  //         password: "admin",
  //       }
  //     )

  //   },[]).then((res) => res.json())
  //   .then((res) => {
  //     localStorage.setItem('token', res?.authenticationToken
  //     );
  //     console.log(res)
  //   });
  // })
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const onClickProfile = () => {
    console.log("object")
  }
  const menu = (
    <Menu>
      <Menu.Item data-name="myprofile" onClick={onClickProfile}>
        My profile
      </Menu.Item>
      <Menu.Item data-name="favourite" onClick={onClickProfile}>
        Favourites
      </Menu.Item>
      <Menu.Item data-name="logout" onClick={onClickProfile}>
        Log out
      </Menu.Item>
    </Menu>
  )
  return (
    <Container >
      <Main>

        <Wrapper>
          <Section logo='true' onClick={() => navigate('/')}>
            <div className='flex items-center'>
              <h3 className='ml-4 font-semibold text-[18px] text-[#fff]'>Phones</h3>
            </div>
          </Section>
          <Section>
            {
              navbar.map((val, index) => {
                return !val.hidden && <Link key={index} className='text-white' to={val.path} >
                  {val.title}
                </Link>
              })
            }
          </Section>
          <Section>

          </Section>

        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  )
}

export default Navbar
