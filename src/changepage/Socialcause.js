import React,{useEffect} from 'react'
import {FaThumbsUp,FaPencilAlt} from 'react-icons/fa'
import Cause from '../animation_lotties/socialcause1.json'
import '../componentcss/Socialcause.css'

const Options = {
  loop: true,
  autoplay: true,
  animationData: Cause,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}
const Socialcause = ({Lottie,currentActive,myColor}) => {
  useEffect(()=>{
    currentActive('Cause')
    myColor("linear-gradient(to right,white,#FFFDA2,white)")
    // eslint-disable-next-line
  },[])
  return (
    <div style={{textAlign:'center',background:'linear-gradient(to right,white,#FFFDA2,white)'}}>
      <Lottie options={Options} width={'35%'}/>
      <div className='Socialcause'>
        <div className='Socailcause_UpperDetail'>
          <img src='expic.jpg' alt='UserPicture'/>
          <p>
          {' '}Jaskaran Singh
          </p>
        </div>
        <div className='Socialcause_Picture'>
          <img src='socialcause.png' alt='SocialPicture'/>
        </div>
        <div className='Socialcause_Description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <div className='Socialcause_btns'>
          <button>Support It <FaThumbsUp/></button>
          <button>Add Comment <FaPencilAlt/></button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Socialcause
