
import React from 'react'
import Sliders from './sliders'
import Starts from './starts'
import { Container, Div, Slide } from './style'
import own from '../../assets/img/own.jpg'

const Review = () => {
  return (
    <Container>
        <Slide>
            <Div dir="column">
                <h1 className='font-semibold text-[18px] '>4.67 (14 reviews)</h1>
                <Div className='justify-between'>

                    <Div dir='column' className= 'pt-4 pb-5 h-[170px] justify-around'>
                        <Div className='w-[380px]  justify-between'>
                            <Div dir='column' className='justify-between text-[#696969]'>
                            Cleanliness
                            </Div>
                                <Sliders/>
                        </Div>

                        <Div className='w-[380px]  justify-between'>
                            <Div dir='column' className='justify-between  text-[#696969]'>
                            Communication
                            </Div>
                                <Sliders/>                
                        </Div>

                        <Div className='w-[380px]  justify-between'>
                            <Div dir='column' className='justify-between  text-[#696969]'>
                            Check-in
                            </Div>
                            <Sliders/> 
                        </Div>

                    </Div>



                    <Div dir='column' className= 'pt-4 h-[170px] justify-around'>
                        <Div className='w-[380px]  justify-between'>
                            <Div dir='column' className='justify-between  text-[#696969]'>
                            Accuracy
                            </Div>
                                <Sliders/>
                        </Div>

                        <Div className='w-[380px]  justify-between'>
                            <Div dir='column' className='justify-between items-center  text-[#696969]'>
                            Location
                            </Div>
                                <Sliders/>                
                        </Div>

                        <Div className='w-[380px]  justify-between'>
                            <Div dir='column' className='justify-between  text-[#696969]'>
                            Value
                            </Div>
                            <Sliders/> 
                        </Div>

                    </Div>

                    
                </Div>
            </Div>
            <div className='w-full h-[300px]  border-b-2 flex justify-between'>
                <div className='h-[250px] w-[390px] ' >
                    <img src={own} className="w-[52px] h-[52px] rounded-full" alt="" />
                    <div className=' flex flex-col pt-2.5'>
                        <div className='font-semibold text-[16px]'>Asliddin Jons</div>
                        <div className='flex justify-between w-full'>
                            <div className='info'>April 6, 2021 at 3:21 AM</div>
                            <div className="flex items-center">
                            <Starts className='pt-[5px]'></Starts>
                            <span className='info text-[12px]' style={{fontSize:"12px",fontWeight:"400"}}>(5 reviews)</span>
                            </div>
                        </div>
                    </div>
                    <div className='info pt-5'>Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus ad autem quis nisi saepe, rem quidem aliquid non asperiores accusantium, mollitia similique nobis aperiam quisquam exercitationem blanditiis, eligendi unde!</div>
                </div>
                <div className='h-[250px] w-[390px] ' >
                    <img src={own} className="w-[52px] h-[52px] rounded-full" alt="" />
                    <div className=' flex flex-col pt-2.5'>
                        <div className='font-semibold text-[16px]'>Asliddin Jons</div>
                        <div className='flex justify-between w-full'>
                            <div className='info'>April 6, 2021 at 3:21 AM</div>
                            <div className="flex items-center">
                            <Starts className='pt-[5px]'></Starts>
                            <span className='info text-[12px]' style={{fontSize:"12px",fontWeight:"400"}}>(5 reviews)</span>
                            </div>
                        </div>
                    </div>
                    <div className='info pt-5'>Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus ad autem quis nisi saepe, rem quidem aliquid non asperiores accusantium, mollitia similique nobis aperiam quisquam exercitationem blanditiis, eligendi unde!</div>
                </div>
            </div>
            <Div dir="column" className='pt-12'>
                <h1 className='font-semibold text-[18px] '>Write a Review</h1>
                <Div className='justify-between'>

                <Div dir='column' className= 'pt-4 h-[170px] flex justify-between'>
                        <Div className='max-w-[266px] flex item-center  justify-between'>
                            <Div className=' text-[#696969]'>
                            Accuracy
                            </Div>
                                <Starts/>
                        </Div>

                        <Div className='w-[266px] flex  justify-between '>
                            <Div  className='justify-between items-center  text-[#696969]'>
                            Location
                            </Div>
                            <Starts/>           
                        </Div>

                        <Div className='max-w-[266px] w-full items-center  justify-between  '>
                            <Div  className='  text-[#696969]'>
                            Value
                            </Div>
                            <Starts/>
                        </Div>

                    </Div>


                    <Div dir='column' className= 'pt-4 h-[170px] flex justify-between'>
                        <Div className='max-w-[266px] flex item-center  justify-between'>
                            <Div className=' text-[#696969]'>
                            Accuracy
                            </Div>
                                <Starts/>
                        </Div>

                        <Div className='w-[266px] flex  justify-between '>
                            <Div  className='justify-between items-center  text-[#696969]'>
                            Location
                            </Div>
                            <Starts/>           
                        </Div>

                        <Div className='max-w-[266px] w-full items-center  justify-between  '>
                            <Div  className='  text-[#696969]'>
                            Value
                            </Div>
                            <Starts/>
                        </Div>

                    </Div>

                    
                </Div>
            </Div>
        </Slide>
    </Container>
  )
}

export default Review
