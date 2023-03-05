import React from 'react'
import { useNavigate } from 'react-router-dom'

// cards
export default function Ecommerce(props) {
  let navigate=useNavigate();

  function handleClick() {
    navigate(props.to)
  }
  return (
    <div>
        <div className='pe-5 pb-5'>
            <img className="imgSize" src={props.img} alt="error" />
            <button className="imgButton" style={{color: "black", textDecoration: "none"}} onClick={handleClick}>
              <b>{props.head}</b>
            </button>
        </div>
    </div>
  )
}
