import React, { useEffect } from 'react'
import Lottie from 'react-lottie'
import notfound1 from '../animation_lotties/notfound1.json'
import notfound2 from '../animation_lotties/notfound2.json'

const Options = {
  loop: true,
  autoplay: true,
  animationData: notfound1,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}
const Options1 = {
  loop: true,
  autoplay: true,
  animationData: notfound2,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}
const Notfound = ({currentActive}) => {
  useEffect(()=>{
    currentActive('none')
    // eslint-disable-next-line
  },[])
  return (
    <div>
      <Lottie options={Options} width={'50%'}/>
      <Lottie options={Options1}  width={'50%'}/>
    </div>
  )
}

export default Notfound
