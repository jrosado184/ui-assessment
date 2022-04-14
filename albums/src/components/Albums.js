import React from 'react';
import './Albums.css';
import data from '../albums.json';

const Albums = () => {
  return (
    <>
      <div className='middle-section'>
        <div className='title-container'>
          <h1 className='title'>Your music</h1>
          <select>
            <option>Sort By</option>
            <option>Artist Name</option>
            <option>Album Name</option>
          </select>
        </div>
        <div className='album-container'>
          {data.map((album) => (
            <div className='album'>
              <img className='artwork' src={album.artworkUrl} alt='' />
              <h2 className='album-title'>{album.title}</h2>
              <h2 className='album-artist'>{album.artist}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Albums;
