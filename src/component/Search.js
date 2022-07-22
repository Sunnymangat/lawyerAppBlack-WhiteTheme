import React,{useState} from 'react'
import {Link } from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaSearch} from 'react-icons/fa'
import {IoMdNotifications} from 'react-icons/io'
import {MdCancel} from 'react-icons/md'
import '../componentcss/Search.css'


const SearchArea = ({leftside,setleftside,bgColor}) => {
  const[searchVisible,setSearchVisible]=useState(false)
  return (
    <div className='SearchArea' style={{background:bgColor}}>
    <div className='SearchArea_First'>
      {
        leftside===true?
        <button onClick={()=>setleftside()}><MdCancel/></button>
        :
        <button onClick={()=>setleftside()}><GiHamburgerMenu/></button>
      }
      <button className='SearchArea_Second_small' onClick={()=>setSearchVisible(!searchVisible)}><FaSearch/></button>
      </div>
      <div className='SearchArea_Second'>
        <input type='text' className='inputArea' placeholder='Search'/>
        <button><FaSearch/></button>
      </div>
      <div className='SearchArea_Third' >
        <Link to='/notifications'><IoMdNotifications className='SearchArea_Third_First'/></Link>
        <Link to='/profile'><BsFillPersonFill  className='SearchArea_Third_Second'/></Link>
      </div>
      {
        searchVisible===true?
        <div className='SearchArea_Second_small'><input type='text' className='inputAreasmallscreen' placeholder='Search'/><button className='searchbtnsmallscreen' ><FaSearch/></button></div>
        :
        null
      }
      </div>
  )
}

export default SearchArea;
