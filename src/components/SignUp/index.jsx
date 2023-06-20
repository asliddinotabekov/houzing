import React from 'react'
import {  Container, Content } from './style'
import {Button} from '../Generics/Button'
import {Input} from '../Generics/Input'
import useRequest from '../../hooks/useRequest'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const request = useRequest()
  const navigate =useNavigate()
  const [body,setBody]= React.useState({})
  const [test, setTest] = React.useState(false)
  

  
  
  const onChange =({target:{value,placeholder,name}})=>{
    setBody(
      {
        ...body,
      [placeholder]:value,
    }
    )
    
  }
    const onSubmit = async () => {
      
      request({
        url: `/public/auth/register`,
        method: "POST",
        body,
        me: true,
      }).then((res) => {
        message.info("successfuly register");
        navigate("/register");
        setTest(true);     
      });
    };
   
  return (
    <Container>
      <Content>
        <div className='subtitle'>Sign Up</div>
          <div className='flex flex-col gap-3'>
          <Input placeholder="email" onChange={onChange} type="email"/>
          <Input name='firstname' placeholder="firstname" onChange={onChange} type="text"/>
          <Input name='lastname' placeholder="lastname" onChange={onChange} type="text"/>
          <div>

          <Input name='password' placeholder="password" onChange={onChange} type="password"/>
          <label htmlFor="as" className='pt-4' style={{cursor:"pointer"}}>
            <input id='as'  style={{cursor:"pointer"}} type="checkbox" />
            <span className='info ml-3'>Remember me</span>
          </label>
          </div>
          </div>
          <Button w={"100%"} h={"44"} onClick={onSubmit}></Button>
      </Content>
    </Container>
  
  )
}

export default SignUp