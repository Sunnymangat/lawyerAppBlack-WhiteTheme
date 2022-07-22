import React from 'react';
import Lottie from 'react-lottie';
import SignUp from '../animation_lotties/lawyer_Sign_up.json';
import Logo from '../animation_lotties/law_and_order_edited.json';
import '../componentcss/Signup.css';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Logo,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: SignUp,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Signup = () => {
  return (
    <div className='Signup'>
      <div style={{ zIndex:'-1', position:'fixed',top:'50%',left:'50%', transform:'translate(-50%,-50%)',width:'100%', height:'100%',borderRadius:'10px',overflow:'auto',backgroundImage: 'url("signup2.jpg")',backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize:'cover', filter: 'blur(10px)'}}>{}</div>
      <div className='Signup_start'>
      <Lottie options={defaultOptions1} height={150} width={250}/>
      Lawyer's Diary<br/>
      </div>
      <div className='Signin_structure'>
        <div className='Signin_logo'>
          <Lottie options={defaultOptions} height={180} width={250} />
          <span>Sign Up ?</span>
        </div>
        <div className='Signin_details'>
          <input type='text' placeholder='Username'/><br/>
          <input type='text' placeholder='Password'/><br/>
          <button type='button'>Sign In</button><br/>
          <span>Forgot Password ?</span>
        </div>
      </div>
      <br/><br/>
      <div className='Signup_end'>Quotes</div> 
    </div>
  )
}

export default Signup
