import React from 'react'
import {  Container, Content } from './style'
import {Button} from '../Generics/Button'
import {Input} from '../Generics/Input'
import useRequest from '../../hooks/useRequest'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const requst = useRequest()
  const navigate =useNavigate()
  const [body,setBody]= React.useState({})
  
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info('Hello, Ant Design!');
  };
  
  
  const onChange =({target:{value,placeholder,name}})=>{
    setBody(
      {
        ...body,
      [placeholder]:value,
    }
    )
    
  }
  const onSubmit =  () => {
    console.log(body);
    requst({
      url: `/public/auth/login`,
      method: "POST",
      body,
      me: true,
    }).then((res) => {
      if (res?.authenticationToken) {
        navigate("/home");
        localStorage.setItem("token", res?.authenticationToken);
      }
      info();
    });
  };
   
  return (
    <Container>
      <Content>
        <div className='subtitle'>Sign In</div>
          <Input placeholder="email" onChange={onChange} type="email"/>
          <div>
          <Input name='password' placeholder="password" onChange={onChange} type="password"/>
          <label htmlFor="as" className='pt-4' style={{cursor:"pointer"}}>
            <input id='as'  style={{cursor:"pointer"}} type="checkbox" />
            <span className='info ml-3'>Remember me</span>
          </label>
          </div>
          <Button w={"100%"} h={"44"} onClick={onSubmit}></Button>
      </Content>
    </Container>
  
  )
}

export default SignIn