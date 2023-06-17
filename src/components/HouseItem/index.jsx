import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { own } from '../../assets/img'
import Input from '../Generics/Input'
import Button from '../Generics/Button'
import {Container,SectionLeft, Icons, SectionRight,Details, Description, Blur, More, Download, YInfo} from './style'
import Yandex from '../Generics/Yandex'
import Review from '../Review'
import Recommended from '../Recommended'
const HouseItem = () => {
  //state and params 
  const params =useParams()
  const [data ,setData]= useState({})

  // useEffect get data
  useEffect(() => {
    fetch(`http://127.0.0.1:8081/api/v1/houses/id/${params?.id}`)
    .then((res)=>res.json())
    .then((res)=>setData(res?.data))
    window.scrollTo(0,0)
    }, [params?.id]);
  return <div>
    <Container>
      <SectionLeft>
        <section className='flex justify-between w-full'>
          <div>
            <div className="title">{data?.name} {data?.city}</div>
            <div className="info mt-2">{data?.city}, {data?.address}, {data?.country}</div>
          </div>
          <div className='flex max-h-[35px] h-full  justify-around  items-center'>
            <div className='flex items-center '>
          <Icons.Love/>
          <span className="info pr-[26px] pl-2.5">Share</span>
            </div>
            <div className='flex items-center'>
          <Icons.Share/>
          <span className="info flex items-center pl-2.5">Save</span>
            </div>
          </div>
        </section>

        <section className='flex justify-end '>
          <div className='flex items-center'>
            <div className="info pr-2"><del>${data?.salePrice || "7,00"}/mo </del></div>
            <div className="title">${data?.price || "18,00"}/mo</div>
          </div>
        </section>

        <section className='flex justify-between pt-1'>
        <Details>
            <Icons.Bed />
            <div className='info pl-4 pr-6'>Bed {data?.houseDetails?.beds || "9"}</div>
            <Icons.Bath />
            <div className='info pl-4 pr-6'>Bath {data?.houseDetails?.bath || "2"}</div>
            <Icons.Garage />
            <div className='info pl-4 pr-6'>Garage {data?.houseDetails?.garage || "4"} </div>
            <Icons.Ruler />
            <div className='info pl-4'>Ruler {data?.houseDetails?.area  || "1200"}kv</div>
        </Details>
        <div className="info">
        Est. Mortgage
        </div>
        </section>

        <section className='w-full'>
          <div className="subtitle pb-4 pt-12 w-full">Description</div>
          
          <Description className='info w-full'>{data?.description}<Blur/> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium obcaecati nulla inventore doloremque sunt officia rem quos. Iure, voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde libero maiores distinctio eius! Quia, sed excepturi quasi vel adipisci ut laborum? Quod suscipit libero vitae, voluptatem a neque expedita aspernatur.</Description>
          <More>Show more</More>
        </section>

        <section className='py-12 border-b-[1px]'>
      <div className='subtitle pb-4'>Document</div>
      <div className='flex '>
      <div className=' flex items-center'>
        <div className='flex  items-center'><Icons.File></Icons.File><span className='pl-2.5 info'>test_property.pdf</span></div>
            <Download>DOWNLOAD</Download>
        </div>
        <div className=' flex items-center'>
            <div className='flex items-center'><Icons.File></Icons.File><span className='pl-2.5 info'>test_property.pdf</span></div>
            <Download>DOWNLOAD</Download>
        </div>
        <div className=' flex items-center'>
            <div className='flex  items-center'><Icons.File></Icons.File><span className='pl-2.5 info'>test_property.pdf</span></div>
            <Download>DOWNLOAD</Download>
        </div>
      </div>
        </section>
          
          <section className='py-12 border-b-[1px]'>
            <div>
              <h1 className='subtitle'>
                  Location
              </h1>
          <div className='flex justify-between pb-6'>

              <div>
                  <div className='flex pt-5 item-center'>
                  <div className='key'>Address:</div>
                      <div className='info'>{data?.address}</div>
                  </div>
                  <div  className='flex  pt-5 '>
                  <div className='key'>State/County:</div>
                      <div className='info'>{data?.country}</div>
                  </div>
                  
              </div>


              <div>
                  <div className='flex  pt-5 '>
                  <div className='key'>City:</div>
                      <div className='info'>{data?.city}</div>
                      
                  </div>
                  <div className='flex  pt-5 '>
                  <div className='key'>Zip:</div>
                      <div className='info'>{data?.zipCode}</div>
                  </div>
                
              </div>


              <div>
                  <div className='flex  pt-5 '>
                      <div className='key'>Area:</div>
                      <div className='info'>{data?.area || 1200}kv</div>
                  </div>
                  <div className='flex pt-5 item-center '>
                  <div className='key'>Country:</div>
                      <div className='info'>{data?.country}</div>
                  </div>
                  
              </div>
              </div>
              </div>
          <Yandex></Yandex>
          </section>


          <section className='py-12 border-b-[1px]'>
            <div>
              <h1 className='subtitle'>
              Property Details
              </h1>
          <div className='flex justify-between pb-6'>

              <div>
                  <div className='flex pt-5 item-center'>
                  <div className='key'>Property ID:</div>
                      <div className='info'>{data?.address}</div>
                  </div>
                  <div  className='flex  pt-5 '>
                  <div className='key'>Price:</div>
                      <div className='info'>{data?.country}</div>
                  </div>
                  <div  className='flex  pt-5 '>
                  <div className='key'>Property Size:</div>
                      <div className='info'>{data?.country}</div>
                  </div>
                  <div  className='flex  pt-5 '>
                  <div className='key'>Year Bulit:</div>
                      <div className='info'>{data?.country}</div>
                  </div>
                  
                  
              </div>


              <div>
                  <div className='flex  pt-5 '>
                  <div className='key'>Bedrooms:</div>
                      <div className='info'>{data?.city}</div>
                      
                  </div>
                  <div className='flex  pt-5 '>
                  <div className='key'>Bathrooms:</div>
                      <div className='info'>{data?.zipCode}</div>
                  </div>
                  <div  className='flex  pt-5 '>
                  <div className='key'>Garage:</div>
                      <div className='info'>{data?.country}</div>
                  </div>
                  <div  className='flex  pt-5 '>
                  <div className='key'>Garage size:</div>
                      <div className='info'>{data?.country}</div>
                  </div>
                
              </div>


              <div>
                  <div className='flex  pt-5 '>
                      <div className='key'>Property Type:</div>
                      <div className='info'>{data?.area || 1200}kv</div>
                  </div>
                  
                  <div className='flex pt-5 item-center '>
                  <div className='key'>Country:</div>
                      <div className='info'>{data?.country}</div>
                  </div>
                  
              </div>
              </div>
              </div>
          </section>


        

        <section className='py-12 border-b-[1px]'>
        
        <div>
            <h1>
                Location
            </h1>
        <div className='flex justify-between pb-5'>

            <div>
                <div className='flex pt-5 item-center '>
                <Icons><Icons.Kansaner></Icons.Kansaner></Icons>
                    <div className='info pt-2'>329 Queensberry Street</div>
                </div>
                <div  className='flex  pt-5 '>
                <Icons><Icons.Qozon></Icons.Qozon></Icons>
                    <div className='info pt-2'> Chilonzor</div>
                </div>
                <div className='flex pt-5 item-center'>
                <Icons><Icons.Fen></Icons.Fen></Icons>
                    <div className='info pt-2'>329 Queensberry Street</div>
                </div>
                <div  className='flex  pt-5 '>
                <Icons><Icons.Gym></Icons.Gym></Icons>
                    <div className='info pt-2'>Chilonzor</div>
                </div>
            </div>


            <div>
                <div className='flex  pt-5 '>
                <Icons><Icons.Lawn></Icons.Lawn></Icons>
                    <div className='info pt-2'>Toshkent</div>
                    
                </div>
                <div className='flex  pt-5 '>
                <Icons><Icons.Kir></Icons.Kir></Icons>
                    <div className='info pt-2' >124321</div>
                </div>
                <div className='flex  pt-5 '>
                <Icons><Icons.Mikro></Icons.Mikro></Icons>
                    <div className='info pt-2' >Toshkent</div>
                    
                </div>
                <div className='flex  pt-5 '>
                <Icons><Icons.Zontik></Icons.Zontik></Icons>
                    <div className='info pt-2'>124321</div>
                </div>
            </div>


            <div>
                <div className='flex  pt-5 '>
                <Icons><Icons.Freezer></Icons.Freezer></Icons>
                    <div className='info pt-2'>Greenville</div>
                </div>
                <div className='flex pt-5 item-center '>
                <Icons><Icons.Xamom></Icons.Xamom></Icons>
                    <div className='info pt-2'>United States</div>
                </div>
                <div className='flex  pt-5 '>
                <Icons><Icons.Bassen></Icons.Bassen></Icons>
                    <div className='info pt-2' >Greenville</div>
                </div>
                <div className='flex pt-5 item-center '>
                <Icons><Icons.Tv></Icons.Tv></Icons>
                    <div className='info pt-2' >United States</div>
                </div>
                
            </div>


            <div>
                <div className='flex  pt-5 '>
                <Icons><Icons.Wash></Icons.Wash></Icons>
                    <div className='info pt-2'>Greenville</div>
                </div>
                <div className='flex pt-5 item-center '>
                <Icons><Icons.Wifi></Icons.Wifi></Icons>
                    <div className='info pt-2'>United States</div>
                </div>
                <div className='flex  pt-5 '>
                <Icons><Icons.Window></Icons.Window></Icons>
                    <div className='info pt-2'>Greenville</div>
                </div>
                <div className='flex pt-5 item-center  items-center'>
                    <Icons><Icons.Abet></Icons.Abet></Icons>
                    <div className='info pt-2'>United States</div>
                </div>
                
            </div>

        </div>
        </div>
        </section>


        <section className='py-12 border-b-2 '>
 
 <div className='pb-10  '>
   <h1 className='subtitle pb-4'>Schedule A Tour</h1>
 <div className="grid md:grid-cols-2 md:gap-6 ">
   <div className="relative z-0 w-full  group">
       <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
       <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
   </div>
   <div className="relative z-0 w-full mb-6 group">
       <input type="time" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
       <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
   </div>
 </div>

 </div>



<div className=''>
   <YInfo>Your Information</YInfo>
 <div className="grid md:grid-cols-3 md:gap-6 pt-4">
   <div className="relative z-0 w-full mb-6 group">
       <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
       <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
   </div>
   <div className="relative z-0 w-full mb-6 group">
       <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
       <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
   </div>
   <div className="relative z-0 w-full mb-6 group">
       <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
       <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
   </div>
 </div>
 <div className="relative z-0 w-full mb-6 group">
     <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
     <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
 </div>
 </div>
 <Button w={250} h={44}>Submit a tour request</Button>
 </section>

 <Review/>

 <section className=''>
  
 <div className="grid md:grid-cols-2 md:gap-6 ">
   
   <div className="relative z-0 w-full mb-6 group">
       <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
       <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
   </div>
   <div className="relative z-0 w-full mb-6 group">
       <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
       <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
   </div>
 </div>
 <div className="relative z-0 w-full mb-6 group">
     <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
     <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Entern Your Massage</label>
 </div>
 </section>
 <Button w={250} h={44}>Submit a tour request</Button>
 
      </SectionLeft>


      <SectionRight>

        <div className='flex '>
          <img className='h-[52px] w-[52px] rounded-full' src={own} alt="sada" />
          <div className='fex pl-3'>
            <h1 className=' subtitle'>Darrel Steward</h1>
            <div className='text-[14px]'>+998 93 906 3773</div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
        <Input h={38} placeholder="Name" type="text" className="mt-3"/>
        <Input h={38} placeholder="Phone" type="tel" />
        <Input h={38} placeholder="Email" type="email"  />
        </div>
        <div className='pt-6 pb-1 border-b-[2px] flex flex-col gap-2'>
          <div className="subtitle">Message</div>
          <div className="info">Hello, I am interested in [New Apartment]</div>
        </div>
        <div className='pt-6 flex'>
          <input type="checkbox" className='mb-5 mr-2' />
          <span className="info">By submitting this form I agree to Terms of Use</span>
        </div>
        {/* <Icons.Start></Icons.Start> */}
        <Button w={"100%"} cl="mt-6">casca</Button>
        
      </SectionRight>
    </Container>
      <Recommended>Similar listings</Recommended>
      </div>

  
  
}

export default HouseItem
  // {/* <section className='flex flex-col'>
  //
  // <div className='info'>
  //   
  // </div>
  // <Icons.Share/>
  // <Icons.Love/>
  // </section> */}