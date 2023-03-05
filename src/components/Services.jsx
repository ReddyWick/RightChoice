import React from 'react'
import Ecommerce from './Ecommerce'
import ecom from '../images/ecommerce.jpeg'
import foodDel from '../images/foodDelivery.jpg'
import edu from '../images/education.jpg'
import ott from '../images/ottStream.jpeg'

export default function Services() {
  return (
    <div className='container'>
        <div className='row d-flex' style={{alignItems:"center"}}>
            <div className='col pe-5 ps-5'>
                <h1 className='head1'>Explore the new and suitable <br/> applications which are best for you..</h1>
            </div>
            <div className='col d-flex pt-5'>
                <div>
                    <Ecommerce img={ecom} head={"ECommerce"} to="./EcomSites"/>
                    <Ecommerce img={foodDel} head={"FoodDelivery"} to="./FoodSites"/>
                </div> <br/>
                <div>
                    <Ecommerce img={edu} head={"Education"} to="./EduSites"/>
                    <Ecommerce img={ott} head={"OTTStreaming"} to="./OTTsites"/>
                </div>
            </div>
        </div>
    </div>
  )
}
