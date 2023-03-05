import React from 'react'
import Ecommerce from './Ecommerce'
import ama from '../images/EcomImg/amazon.jpg'
import flipka from '../images/EcomImg/flipkart.jpg'
import myn from '../images/EcomImg/myntra.jpg'
import aji from '../images/EcomImg/ajio.jpg'


export default function EcomSites() {
  return (
    <div className='container'>
        <div className='row' style={{alignItems:"center"}}>
            <div className='col d-flex pe-5 ps-5'>
                <h1 className='head1'>Top sites <br/> to E-Commerce sites</h1>
            </div>
            
            <div className='col d-flex pt-5'>
                <div>
                    <Ecommerce img={ama} head={"Amazon"} to={"/Amazon"}/>
                    <Ecommerce img={flipka} head={"Flipkart"} to={"/Flipkart"}/>
                </div> <br/>
                <div>
                    <Ecommerce img={myn} head={"Myntra"} to={"/Myntra"}/>
                    <Ecommerce img={aji} head={"Ajio"} to={"/Ajio"}/>
                </div>
            </div>
        </div>
    </div>
  )
}
