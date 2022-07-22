import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import './recommendstyle.css'

const Default = () => {
  return (
    <div className='recommend'>
      <div className='recommend_picture'>
        <img src='expic.jpg' alt='LawyerPicture'/></div>
      <div className='recommend_details'>   
        <div className='recommend_name'>Jaskaran Singh</div>
        <div className='recommend_address'>Doraha, Ludhiana</div>
      </div> 
      <div className='recommend_experience'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
      <div className='recommend_btns'>
        <Link to={'/recommendations/default/viewmore'}><button>View More</button>{' '}</Link>
        <Link to={'appointment'}><button>Appointment</button>{' '}</Link>
        <Link to={'report'}><button>Report</button></Link>
        <Outlet/>
      </div>
    </div>
  )
}

export default Default
