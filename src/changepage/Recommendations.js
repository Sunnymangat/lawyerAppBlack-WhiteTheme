import React,{useEffect} from 'react'
import { Link , Outlet} from 'react-router-dom'
import {AiTwotoneBulb} from 'react-icons/ai'
import {BsFillPinMapFill} from 'react-icons/bs'
import recommend from '../animation_lotties/recommendations1.json'
import '../componentcss/Recommendations.css'

const Options1 = {
  loop: true,
  autoplay: true,
  animationData: recommend,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}
const Recommendations = ({Lottie,currentActive,myColor}) => {
  useEffect(() => {
    currentActive("Recommendations")
    myColor('linear-gradient(to right,white,#C2FFF9,white)')
    // eslint-disable-next-line
  }, [])
  return (
    <div style={{textAlign:'center',background:'linear-gradient(to right,white,#C2FFF9,white)'}}>
      <Lottie options={Options1} width={'40%'}/>
      <div className='Recommends'>
        <Link to='default'><button><AiTwotoneBulb/> Default</button></Link>
        <Link to='areawise'><button><BsFillPinMapFill/> By Area</button></Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Recommendations
