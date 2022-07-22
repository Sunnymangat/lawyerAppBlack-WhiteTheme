import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import './Viewmore.css'

const Viewmore = () => {
  return (
    <div className='Homeviewmore'>
      <div className='Homeviewmore_picture'>
        <img src="expic.jpg" alt='userpicture'/>
      </div>
      <div className='Homeviewmore_details'>
          <div className='Homeviewmore_details_name'>Jaskaran Singh</div>
          <div className='Homeviewmore_details_location'>Begowal, Doraha, Ludhiana</div>
          <div className='Homeviewmore_details_experience'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
          <span className='Homeviewmore_details_stars'>Stars<br/></span>
          <div className="Homeviewmore_details_btns">
          <button>Advocate Location</button>
          <Link to='appointment'><button>Appointment</button></Link>
          <Link to='report'><button>Report ?</button></Link>
          <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default Viewmore;
