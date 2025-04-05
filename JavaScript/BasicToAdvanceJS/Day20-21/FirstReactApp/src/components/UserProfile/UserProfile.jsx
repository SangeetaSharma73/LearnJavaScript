import React from 'react'
import './UserProfile.css';

const UserProfile = ({img,name}) => {
    // console.log(props);
  return (
    <div className='userProfile'>
        <img src={img} alt="Image"/>  
        <h2>{name}</h2>  
    </div>
  )
}
export default UserProfile;