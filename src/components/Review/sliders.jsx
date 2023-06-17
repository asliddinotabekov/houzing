import React from 'react'
import { Slider } from 'antd'
import { useState } from 'react'
import { Div, Icons } from './style'

const Sliders = () => {
    const [count, setCount] =useState(0)
  return (
    <Div dir='row ' className='justify-around w-[190px]'>
      <Slider className='w-[150px]' autoFocus={false} defaultValue={4} disabled={false} max={100} onChange={(value)=> setCount(value/20)} /> <div className='flex items-center'> {count}</div>
    </Div>
  )
}

export default Sliders



