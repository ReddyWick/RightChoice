import React from 'react'
import Ecommerce from './Ecommerce'
import udemy from '../images/EduImg/Udemy.jpg'
import intel from '../images/EduImg/intellipaat.jpeg'
import sam from '../images/EduImg//samBro.jpg'
import edu from '../images/EduImg/edus.jpeg'

export default function EduSites() {
  return (
    <div className='container'>
        <div className='row d-flex' style={{alignItems:"center"}}>
            <div className='col pe-5 ps-5'>
                <h1 className='head1'>Top sites <br/> to E-Edu sites</h1>
            </div>
            
            <div className='col d-flex pt-5'>
                <div>
                    <Ecommerce img={udemy} head={"Udemy"}/>
                    <Ecommerce img={intel} head={"Intellipaat"}/>
                </div> <br/>
                <div>
                    <Ecommerce img={sam} head={"SamBro"}/>
                    <Ecommerce img={edu} head={"Edus"}/>
                </div>
            </div>
        </div>
    </div>
  )
}
