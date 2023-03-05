import React from 'react'
import Ecommerce from './Ecommerce'
import swi from '../images/FoodImg/swiggy.jpeg'
import zom from '../images/FoodImg/Zomato.jpg'
import dun from '../images/FoodImg/dunzo.jpeg'
import dab from '../images/FoodImg/daaba.jpg'

export default function FoodSites() {
  return (
    <div className='container'>
        <div className='row d-flex' style={{alignItems:"center"}}>
            <div className='col pe-5 ps-5'>
                <h1 className='head1'>Top sites <br/> to order E-Food sites</h1>
            </div>
            
            <div className='col d-flex pt-5'>
                <div>
                    <Ecommerce img={swi} head={"Swiggy"}/>
                    <Ecommerce img={zom} head={"Zomato"}/>
                </div> <br/>
                <div>
                    <Ecommerce img={dun} head={"Dunzo"}/>
                    <Ecommerce img={dab} head={"DabaWaala"}/>
                </div>
            </div>
        </div>
    </div>
  )
}
