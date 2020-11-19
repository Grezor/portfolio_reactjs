import React from 'react'
import {Typography} from '@material-ui/core'
import './Profile.css'
import Background from '../../assets/images/profile.jpg';

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className='name'>Geoffrey Duplessi</Typography>
        <Typography className='title'>Developer</Typography>
      </div>
      <figure className="profile_image">
        <img src={Background} alt="" />
      </figure>

      <div className="profile_information">
        Timeline
        <br />
        <button>My button</button>
      </div>
    </div>
  )
}
export default Profile;
