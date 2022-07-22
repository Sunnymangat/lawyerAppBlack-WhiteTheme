import React, { useEffect } from 'react'
import {Link,Outlet} from 'react-router-dom'
import Case from '../animation_lotties/handledcases1.json'
import '../componentcss/Handledcase.css'

const Options = {
  loop: true,
  autoplay: true,
  animationData: Case,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

const Handledcase = ({Lottie,currentActive, myColor}) => {
  useEffect(()=>{
    currentActive("Cases")
    myColor('linear-gradient(to right,white,#C2FFF9,white)')
    // eslint-disable-next-line
  },[])
  return (
    <div style={{textAlign:'center',background:'linear-gradient(to right,white,#C2FFF9,white)'}}>
      <Lottie options={Options} width={'35%'}/>
      <div className='handlecase'>
        <div className='handlecase_img'>
        <img src='expic.jpg' alt='clientPicture'/>
        </div>
        <div className='handlecase_personaldetails'>
        Jaskaran Singh<br/>
        Doraha, Ludhiana
        </div>
        <div className='handlecase_casedetails'>
        Cyber Crime<br/>
        Just a single line
        </div>
        <div className='handlecase_date'>
        1/11/2022<br/>
        till<br/>
        now
        </div>
        <div className='handlecase_btns'>
          <Link to='casemodifications'><button>Modify Now</button></Link>
          <Outlet/>
        </div>  
      </div>      
    </div>
  )
}

export default Handledcase
