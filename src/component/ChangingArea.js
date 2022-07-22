import React,{useState,useEffect} from 'react'
import {Route,Routes,Link,Navigate} from 'react-router-dom'
import {ImHome} from 'react-icons/im'
import {FaArchive,FaBookReader,FaClipboardList,FaGavel} from 'react-icons/fa'
import {BsClockFill} from 'react-icons/bs'
import '../componentcss/ChangingArea.css'
import {BsPersonBoundingBox} from 'react-icons/bs'
import Home from '../changepage/Home'
import Recommendations from '../changepage/Recommendations'
import Types from '../changepage/Types'
import Socialcause from '../changepage/Socialcause'
import Handledcase from '../changepage/Handledcase'
import Meetingschedule from '../changepage/Meetingschedule'
import Notifications from '../changepage/Notifications'
import Profile from '../changepage/Profile'
import About from '../changepage/About'
import Viewmore from '../home_functionality/Viewmore'
import Appointment from '../home_functionality/Appointment'
import Report from '../home_functionality/Report'
import Notfound from '../changepage/Notfound'
import Default from '../recommend_functionality/Default'
import Area from '../recommend_functionality/Area'
import Lawyertype from '../type/Lawyertype'
import Modify from '../cases/Modify'
import Schedule from '../schedule/Schedule'


const ChangingArea = ({leftside,Lottie,changeUpperColors,changePosition}) => {
  const[selected,setSelected]=useState('Home')
  const[color,setcolor]=useState('linear-gradient(to right,white,#FFFDA2,white)')
  useEffect(()=>{
    changeUpperColors(color)
    //eslint-disable-next-line
  },[color])
  return(
    leftside===false?
    <div>
          <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home/*' element={<Home Lottie={Lottie} currentActive={(e)=>setSelected(e)}  myColor={(e)=>setcolor(e)}/>}>
              <Route path={'appointment'} element={<Appointment/>}/>
              <Route path={'report'} element={<Report/>}/>
            </Route>
            <Route path={'/home/view_more/*'} element={<Viewmore/>}>
              <Route path={'appointment'} element={<Appointment/>}/>
              <Route path={'report'} element={<Report/>}/>
            </Route>
            <Route path={'/recommendations/*'} element={<Recommendations Lottie={Lottie} currentActive={(e)=>setSelected(e)} myColor={(e)=>setcolor(e)}/>}>
              <Route path={'default/*'} element={<Default/>}>
                <Route path={'appointment'} element={<Appointment/>}/>
                <Route path={'report'} element={<Report/>}/>
              </Route>
              <Route path={'areawise/*'} element={<Area/>}>
                <Route path={'appointment'} element={<Appointment/>}/>
                <Route path={'report'} element={<Report/>}/>
              </Route>
            </Route>
            <Route path={'/recommendations/default/viewmore/*'} element={<Viewmore/>}>
              <Route path={'appointment'} element={<Appointment/>}/>
              <Route path={'report'} element={<Report/>}/>
            </Route>
            <Route path={'/recommendations/areawise/viewmore/*'} element={<Viewmore/>}>
              <Route path={'appointment'} element={<Appointment/>}/>
              <Route path={'report'} element={<Report/>}/>
            </Route>
            <Route path={'/types/'} element={<Types Lottie={Lottie}  currentActive={(e)=>setSelected(e)}  myColor={(e)=>setcolor(e)}/>}/>
            <Route path={'/types/crime'} element={<Lawyertype/>}/>
            <Route path={'/types/cyber'} element={<Lawyertype/>}/>
            <Route path={'/types/family'} element={<Lawyertype/>}/>
            <Route path={'/types/land'} element={<Lawyertype/>}/>
            <Route path={'/types/business'} element={<Lawyertype/>}/>
            <Route path={'/types/local'} element={<Lawyertype/>}/>
            <Route path='/socialcause' element={<Socialcause Lottie={Lottie} currentActive={(e)=>setSelected(e)} myColor={(e)=>setcolor(e)}/>}/>
            <Route path='/handledcases/*' element={<Handledcase Lottie={Lottie} currentActive={(e)=>setSelected(e)} myColor={(e)=>setcolor(e)}/>}>
              <Route path='casemodifications' element={<Modify/>}/>
            </Route>
            <Route path={'/meetingschedule/*'} element={<Meetingschedule Lottie={Lottie} currentActive={(e)=>setSelected(e)} myColor={(e)=>setcolor(e)}/>}>
              <Route path={'meetingmodifications'} element={<Schedule/>}/>
            </Route>
            <Route path='/notifications' element={<Notifications Lottie={Lottie}/>}/>
            <Route path='/profile' element={<Profile Lottie={Lottie}/>}/>
            <Route path='/about' element={<About currentActive={(e)=>setSelected(e)}/>}/>
            <Route path='*' element={<Notfound Lottie={Lottie} currentActive={(e)=>setSelected(e)}/>}/>
          </Routes>
        </div>
    : 
    <div className='ChangingArea' style={{background:color}}>
      <div className='ChangingArea_First' >
        <br/>
        <Link to='/home'>
          <button style={{background:selected==='Home'?'white':'transparent'}} onClick={()=>{setSelected('Home');setcolor('linear-gradient(to right,white,#FFFDA2,white)')}}>
            {
              selected==='Home'?
              <>
              <ImHome className='ChangingArea_Content_Visible'/>
              <span className='ChangingArea_Content_Visible'>{" "}Home</span>
              </>
              :
              <>
              <ImHome className='ChangingArea_Icons'/>
              <span className='ChangingArea_Content'>{" "}Home</span>
              </>
            }
            
          </button>
        </Link><br/><br/>

        <Link to='/recommendations'>
          <button style={{background:selected==='Recommendations'?'white':'transparent'}} onClick={()=>{setSelected('Recommendations');setcolor('linear-gradient(to right,white,#C2FFF9,white)')}}>
            {
              selected==='Recommendations'?
              <>
              <FaBookReader className='ChangingArea_Content_Visible'/>
              <span className='ChangingArea_Content_Visible'>{" "}Recommends</span>
              </>
              :
              <>
              <FaBookReader className='ChangingArea_Icons'/>
              <span className='ChangingArea_Content'>{" "}Recommends</span>
              </>
            }
          </button>
        </Link><br/><br/>

        <Link to='/types'>
          <button style={{background:selected==='Types'?'white':'transparent'}}onClick={()=>{setSelected('Types');setcolor('linear-gradient(to right,white,#BAFFB4,white)')}}>
          {
            selected==='Types'?
            <>
            <FaClipboardList className='ChangingArea_Content_Visible'/>
            <span className='ChangingArea_Content_Visible'>{" "}Types</span>
            </>
            :
            <>
            <FaClipboardList className='ChangingArea_Icons'/>
            <span className='ChangingArea_Content'>{" "}Types</span>
            </>
          }
          
          </button>
        </Link><br/><br/>

        <Link to='/socialcause'>
          <button style={{background:selected==='Cause'?'white':'transparent'}} onClick={()=>{setSelected('Cause');setcolor('linear-gradient(to right,white,#FFFDA2,white)')}}>
          {
            selected==='Cause'?
            <>
            <FaGavel className='ChangingArea_Content_Visible'/>
            <span className='ChangingArea_Content_Visible'>{" "}Cause</span>
            </>
            :
            <>
            <FaGavel className='ChangingArea_Icons'/>
            <span className='ChangingArea_Content'>{" "}Cause</span>
            </>
          }
          </button>
        </Link><br/><br/>
        
        <Link to='/handledcases'>
          <button style={{background:selected==='Cases'?'white':'transparent'}} onClick={()=>{setSelected('Cases');setcolor('linear-gradient(to right,white,#C2FFF9,white)')}}>
          {
            selected==='Cases'?
            <>
            <FaArchive className='ChangingArea_Content_Visible'/>
            <span className='ChangingArea_Content_Visible'>{" "}Cases</span>
            </>
            :
            <>
            <FaArchive className='ChangingArea_Icons'/>
            <span className='ChangingArea_Content'>{" "}Cases</span>
            </>
          }
          </button>
        </Link><br/><br/>

        <Link to='/meetingschedule'>
          <button style={{background:selected==='Schedule'?'white':'transparent'}} onClick={()=>{setSelected('Schedule');setcolor('linear-gradient(to right,white,#BAFFB4,white)')}}>
          {
            selected==='Schedule'?
            <>
            <BsClockFill className='ChangingArea_Content_Visible'/>
            <span className='ChangingArea_Content_Visible'>{" "}Schedule</span>
            </>
            :
            <>
            <BsClockFill className='ChangingArea_Icons'/>
            <span className='ChangingArea_Content'>{" "}Schedule</span>
            </>
          }
          </button>
        </Link><br/><br/>
        <div style={{position:'fixed',bottom:'0%',right:'0%',background:'white',borderRadius:'10px',padding:'0.5%',color:'black',fontWeight:'bold',cursor:'pointer'}}><Link to='/about' style={{color:'black'}}>About <BsPersonBoundingBox/></Link></div>
      </div>
      <div className='ChangingArea_Second'>
        <div>
          <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path={'/home/*'} element={<Home Lottie={Lottie} currentActive={(e)=>setSelected(e)} myColor={(e)=>setcolor(e)}/>}>
              <Route path={'appointment/:name'} element={<Appointment/>}/>
              <Route path={'report'} element={<Report changePosition={changePosition}/>}/>
            </Route>
            <Route path={'/home/view_more/*'} element={<Viewmore/>}>
            <Route path={'appointment'} element={<Appointment/>}/>
              <Route path={'report'} element={<Report/>}/>
            </Route>
            <Route path={'/recommendations/*'} element={<Recommendations Lottie={Lottie} currentActive={(e)=>setSelected(e)} myColor={(e)=>setcolor(e)}/>}>
              <Route path={'default/*'} element={<Default/>}>
                <Route path={'appointment'} element={<Appointment/>}/>
                <Route path={'report'} element={<Report/>}/>
              </Route>
              <Route path={'areawise/*'} element={<Area/>}>
                <Route path={'appointment'} element={<Appointment/>}/>
                <Route path={'report'} element={<Report/>}/>
              </Route>
            </Route>
            <Route path={'/recommendations/default/viewmore/*'} element={<Viewmore/>}>
              <Route path={'appointment'} element={<Appointment/>}/>
              <Route path={'report'} element={<Report/>}/>
            </Route>
            <Route path={'/recommendations/areawise/viewmore/*'} element={<Viewmore/>}>
              <Route path={'appointment'} element={<Appointment/>}/>
              <Route path={'report'} element={<Report/>}/>
            </Route>
            <Route path={'/types/'} element={<Types Lottie={Lottie}  currentActive={(e)=>setSelected(e)}  myColor={(e)=>setcolor(e)}/>}/>
            <Route path={'/types/crime/*'} element={<Lawyertype/>}>
              <Route path={'appointment'} element={<Appointment/>}/>
              <Route path={'report'} element={<Report/>}/>
            </Route>
            <Route path={'/types/cyber/*'} element={<Lawyertype/>}>
              <Route path={'appointment'} element={<Appointment/>}/>
              <Route path={'report'} element={<Report/>}/>
            </Route>
            <Route path={'/types/family/*'} element={<Lawyertype/>}>
              <Route path={'appointment'} element={<Appointment/>}/>
              <Route path={'report'} element={<Report/>}/>
            </Route>
            <Route path={'/types/land/*'} element={<Lawyertype/>}>
              <Route path={'appointment'} element={<Appointment/>}/>
              <Route path={'report'} element={<Report/>}/>
            </Route>
            <Route path={'/types/business/*'} element={<Lawyertype/>}>
              <Route path={'appointment'} element={<Appointment/>}/>
              <Route path={'report'} element={<Report/>}/>
            </Route>
            <Route path={'/types/local/*'} element={<Lawyertype/>}>
              <Route path={'appointment'} element={<Appointment/>}/>
              <Route path={'report'} element={<Report/>}/>
            </Route>
            <Route path={'/socialcause'} element={<Socialcause Lottie={Lottie} currentActive={(e)=>setSelected(e)} myColor={(e)=>setcolor(e)}/>}/>
            <Route path='/handledcases/*' element={<Handledcase Lottie={Lottie} currentActive={(e)=>setSelected(e)} myColor={(e)=>setcolor(e)}/>}>
              <Route path='casemodifications' element={<Modify/>}/>
            </Route>
            <Route path={'/meetingschedule/*'} element={<Meetingschedule Lottie={Lottie} currentActive={(e)=>setSelected(e)} myColor={(e)=>setcolor(e)}/>}>
              <Route path={'meetingmodifications'} element={<Schedule/>}/>
            </Route>
            <Route path={'/notifications'} element={<Notifications/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
            <Route path={'/about'} element={<About currentActive={(e)=>setSelected(e)}/>}/>
            <Route path='*' element={<Notfound Lottie={Lottie} currentActive={(e)=>{setSelected(e)}}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
  
}

export default ChangingArea
