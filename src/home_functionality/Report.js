import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {MdCancel} from 'react-icons/md'

const MODAL_STYLES={
  position:'absolute',
  top:'50%',
  left:'50%',
  transform:'translate(-50%,-50%)',
  borderRadius:'10px',
  overflow: 'auto',
  background: 'linear-gradient(to right, white, #dcdcdc, white)'
}
const OVERLAY_STYLES={
  position:'fixed',
  top:0,
  bottom:0,
  right:0,
  left:0,
  background:'rgba(0,0,0,0.15)',
  zIndex:10
}
const CROSS_STYLE={
  position:'fixed',
  top:'1%',
  right:'1%',
  cursor:'pointer'
}
const Report = ({changePosition}) => {
  useEffect(()=>{
    changePosition('fixed')
    //eslint-disable-next-line
  },[])
  const navigate=useNavigate()
  return (
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
      <MdCancel style={CROSS_STYLE} onClick={()=>{changePosition('relative');navigate(-1)}}/>
      <div className='Appointment_details'>
        <img src='expic.jpg' alt='lawyerpicture' style={{width:'100%'}}/>
        <div className='Appointment_details_name'>Jaskaran Singh</div>
        <div className='Appointment_details_location'>Begowal, Doraha, Ludhiana</div>
        <div className="Appointment_details_btns">
          <button>Report ?</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Report;
