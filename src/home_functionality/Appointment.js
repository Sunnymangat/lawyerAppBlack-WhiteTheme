import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import {MdCancel} from 'react-icons/md'

const MODAL_STYLE={
  position:'absolute',
  top:'50%',
  left:'50%',
  transform:'translate(-50%,-50%)',
  background: 'linear-gradient(to right,white, #d3d3d3,white)',
  borderRadius:'10px',
}

const OVERLAY_STYLES={
  position: 'fixed',
  top:0,
  bottom:0,
  left:0,
  right:0,
  background:'rgba(0,0,0,0.1)',
  zIndex:10,
}
const CROSS_STYLE={
  position:'fixed',
  top:'1%',
  right:'1%',
  cursor:'pointer'
}
const Appointment = () => {
  const navigate=useNavigate()
  const {name}=useParams()
  return (
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLE}>
      <MdCancel style={CROSS_STYLE} onClick={()=>navigate(-1)}/>
      <div className='Appointment_details'>
        <img src='expic.jpg' alt='lawyerpicture' style={{width:'100%'}}/>
        <div className='Appointment_details_name'>{name}</div>
        <div className='Appointment_details_location'>Begowal, Doraha, Ludhiana</div>
        <div className="Appointment_details_btns">
          <button>Fix Appointment</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Appointment;
