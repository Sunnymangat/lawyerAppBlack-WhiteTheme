import React,{useState} from 'react'
import Lottie from 'react-lottie';
import ChangingArea from './ChangingArea'
import Navbar from './Navbar'
import Search from './Search'

const Homepage = () => {
  const [leftside,setleftside]=useState(true)
  const [bgColor,setbgColor]=useState('white')
  const [positionIt,setPosition]=useState('relative')
  return (
    <div style={{background:positionIt}}>
      <Navbar Lottie={Lottie} bgColor={bgColor}/>
      <Search leftside={leftside} setleftside={()=>setleftside(!leftside)} bgColor={bgColor}/>
      <ChangingArea Lottie={Lottie} leftside={leftside} changeUpperColors={(e)=>setbgColor(e)} changePosition={(e)=>setPosition(e)}/>
    </div>
  )
}

export default Homepage
