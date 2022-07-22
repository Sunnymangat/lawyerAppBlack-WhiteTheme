import React from 'react'
import{Link,Outlet} from 'react-router-dom'

const Lawyertype = ({color}) => {
  return (
    <div style={{textAlign:'center'}}>
      <div className='HomeContent'>
        <div className='HomeContent_Image'>
        <img src='expic.jpg' alt='profile Picure'/>
        </div>
        <div className='HomeContent_details'>
          <div className='HomeContent_details_name'>Jaskaran Singh</div>
          <div className='HomeContent_details_location'>Begowal, Doraha, Ludhiana</div>
          <div className='HomeContent_details_experience'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
          <span className='HomeContent_details_stars'>Stars<br/></span>
          <div className="HomeContent_details_btns">
            <Link to='/home/view_more'><button>View More..</button></Link>
            <Link to='appointment'><button>Appointment</button></Link>
            <Link to='report'><button>Report ?</button></Link>
            <Outlet/>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Lawyertype
