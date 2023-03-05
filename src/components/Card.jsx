import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
    <div className='ms-5 me-5'>
        <div className="card ms-4 me-4 mt-5 mb-5" style={{width: "18rem"}}>
            <img src={props.img1} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.head1}</h5>
                <p className="card-text">{props.para1}</p>
                <Link to={props.link1} className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    </div>
  )
}
