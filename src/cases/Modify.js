import React from 'react'
import { useNavigate } from 'react-router-dom'
import {MdCancel} from 'react-icons/md'
import './Modify.css'

const OVERLAY_STYLE={
  position:'fixed',
  top:0,
  bottom:0,
  left:0,
  right:0,
  zIndex:10,
  textAlign:'unset'
}
const MODAL_STYLE={
  position: 'absolute',
  top:'50%',
  left:'50%',
  transform:'translate(-50%,-50%)',
  background:'#FFFDDE',
  padding:'1%',
  width:'60%',
  borderRadius:'15px',
}
const BUTT_STYLE={
  position:'fixed',
  top:2,
  right:2,
  cursor:'pointer'
}
const Modify = () => {
  const navigate=useNavigate()
  return (
    <div style={OVERLAY_STYLE}>
      <div className="ModifySection" style={MODAL_STYLE}>
        <MdCancel onClick={()=>navigate(-1)} style={BUTT_STYLE}/>
      <span className='ModifySectionText'>Name: {' '}</span><input type='text' /><br/>
      <span className='ModifySectionText'>Location: {' '}</span><input type='text' /><br/>
      <span className='ModifySectionText'>Description: {' '}</span><textarea type='text'/><br/>
      <span className='ModifySectionText'>From:</span>
      <input type='date' /><br/>
      <span className='ModifySectionText'>Till:</span>
      <input type='date' /><br/>
      <button>Change It</button>{' '}
      <button onClick={()=>navigate(-1)}>Cancel</button>
      </div>
    </div>
  )
}

export default Modify
