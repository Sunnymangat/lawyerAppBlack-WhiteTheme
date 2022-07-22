import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import {RiComputerFill} from 'react-icons/ri'
import {MdFamilyRestroom, MdLocalLibrary, MdTransferWithinAStation} from 'react-icons/md'
import {GiGrassMushroom} from 'react-icons/gi'
import {FaBusinessTime} from 'react-icons/fa'

import '../componentcss/Types.css'

const Types = ({currentActive,myColor}) => {
  useEffect(()=>{
    currentActive('Types')
    myColor('linear-gradient(to right,white,#BAFFB4,white)')
    // eslint-disable-next-line
  },[])
  return (
    <div style={{textAlign:'center',background:'linear-gradient(to right,white,#BAFFB4,white)'}}>
      <div className='Types'>
      <Link to='/types/crime'><button><MdTransferWithinAStation/> Crime</button></Link>
      <Link to='/types/cyber'><button><RiComputerFill/> Cyber</button></Link>
      <Link to='/types/family'><button><MdFamilyRestroom/> Family</button></Link>
      <Link to='/types/land'><button><GiGrassMushroom/> {' '}Land</button></Link>
      <Link to='/types/business'><button><FaBusinessTime/> Business</button></Link>
      <Link to='/types/local'><button><MdLocalLibrary/> Local</button></Link>
      </div>
    </div>
  )
}

export default Types
