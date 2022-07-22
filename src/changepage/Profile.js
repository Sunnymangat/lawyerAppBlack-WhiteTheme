import React from 'react';
import '../componentcss/Profile.css'

const Profile = () => {
  
  return (
    <div className='profilepage'>
      <div className='profilepage_image'>
        <img src='expic.jpg' alt='userpicture'/>
      </div>
      <div className='profilepage_details'>
        <div className='profilepage_name'>Jaskaran Singh</div>
        <div className='profilepage_location'>Doraha, Ludhiana</div>
        <div  className='profilepage_description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        <div>Stars</div>
        <div  className='profilepage_btns'>
          <button>Edit Profile</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
