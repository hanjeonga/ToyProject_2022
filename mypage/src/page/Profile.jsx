import React from 'react';
import './../css/profile.css';
import Header from './../component/Header';
import SubHeader from './../component/SubHeader';

const Profile = () => {
  return (
    <div id='Profile'>
      <div id='body'>
        <div className='body-camera'><div className='body-camera-lens'></div></div>
          <div className='content'>
            <Header />
            <div className></div>
            <SubHeader />
          </div>
      </div>
      <div id='bottom'>
        <div className='bottom-logo'><img src="/img/icon/apple.svg" alt="" /></div>
      </div>
    </div>
  );
};

export default Profile;