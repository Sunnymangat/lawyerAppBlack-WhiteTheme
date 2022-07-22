import React,{useEffect} from 'react'

const About = ({currentActive}) => {
  useEffect(() => {
    currentActive('About')
    // eslint-disable-next-line
  },[])
  return (
    <div style={{textAlign:'center',color:'black',fontSize:'200%'}}>
      Jaskaran Singh
    </div>
  )
}

export default About
