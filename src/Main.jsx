import React from 'react'
import Mainimage from '../src/image/Service 24_7-pana 1.jpg'
import Form from './Form'

function Main() {
  return (
    <>
    <div className='flex'>
        
        <Form/>
        <div><img  className='img1' src={Mainimage} alt="" /></div>
    



    </div>
    </>
  )
}

export default Main