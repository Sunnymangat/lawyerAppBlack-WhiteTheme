import React,{useEffect} from 'react'
import {Link,Outlet} from 'react-router-dom'
import Meeting from '../animation_lotties/meetingtime1.json'
import '../componentcss/Meetingschedule.css'

const Options = {
  loop: true,
  autoplay: true,
  animationData: Meeting,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}
const Meetingschedule = ({Lottie,currentActive,myColor}) => {
  useEffect(() => {
    currentActive('Schedule')
    myColor('linear-gradient(to right,white,#BAFFB4,white)')
    // eslint-disable-next-line
  },[])
  return (
    <div style={{textAlign:'center',background:'linear-gradient(to right,white,#BAFFB4,white)'}}>
      <Lottie options={Options} width={'35%'}/>
      <div className='meetingschedule'>
        <div className='meetingschedule_details'>
        Jaskaran Singh<br/>
        Doraha, Ludhiana
        </div>
        <div className='meetingschedule_time'>
        11:30 am<br/>
        1/11/2022
        </div>
        <div className='meetingschedule_venue'>
          Meeting Venue
        </div>
        <div className='meetingschedule_btns'>
          <Link to='meetingmodifications'><button>
            Make Changes
          </button></Link>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Meetingschedule;
