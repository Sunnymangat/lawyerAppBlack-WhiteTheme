import React from 'react';
import {ImHammer2} from 'react-icons/im'
import { GiLifeInTheBalance} from 'react-icons/gi'
import '../componentcss/Navbar.css'


const Navbar = ({bgColor}) => {
  return (
    <div className='NavbarArea' style={{background:bgColor}}>
      <div className='NavbarArea_First'>
        <div>
        <ImHammer2 />
        </div>
      </div>
      <div className='NavbarArea_Second'>
        Lawyer's Diary</div>
      <div className='NavbarArea_Third'>
        <div>
          <GiLifeInTheBalance/>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
