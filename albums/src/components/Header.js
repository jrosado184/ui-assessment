import React from 'react';
import music_logo from '../assets/music-logo.png';

const Header = () => {
  return (
    <>
      <header>
        <div className='music-container'>
          <h1 className='music'>Music</h1>
          <img className='music-logo' src={music_logo} alt='music_logo' />
        </div>
      </header>
    </>
  );
};

export default Header;
