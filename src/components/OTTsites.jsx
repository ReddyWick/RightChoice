import React from 'react'
import Ecommerce from './Ecommerce'
import amaPrime from '../images/OTTImg/amaPrime.jpeg'
import zee5 from '../images/OTTImg/ZEE5.jpg'
import aha from '../images/OTTImg/aha.jpeg'
import jioCinema from '../images/OTTImg/jioCinema.jpeg'

export default function OTTsites() {
  return (
    <div className='container'>
      <div className='row d-flex' style={{alignItems:"center"}}>
            <div className='col pe-5 ps-5'>
                <h1>Top sites <br/> to E-OTT sites</h1>
            </div>
            
            <div className='col d-flex pt-5'>
                <div>
                    <Ecommerce img={amaPrime} head={"AmazonPrime"}/>
                    <Ecommerce img={zee5} head={"Zee5"}/>
                </div> <br/>
                <div>
                    <Ecommerce img={aha} head={"Aha"}/>
                    <Ecommerce img={jioCinema} head={"JioCinema"}/>
                </div>
            </div>
        </div>
    </div>
  )
}
