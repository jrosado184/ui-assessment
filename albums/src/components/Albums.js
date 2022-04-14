import React, { useState } from "react";
import "./Albums.css";
import data from "../albums.json";

const Albums = () => {
  const [albums, setAlbums] = useState(data);

  const handleDelete = (title) => {
    setAlbums(albums.filter((data) => data.title !== title));
  };

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
          {albums.map((album, index) => (
            <div key={index} className='album'>
              <div className='delete-container'>
                <span
                  onClick={() => handleDelete(album.title)}
                  className='delete'
                >
                  &#10060;
                </span>
              </div>
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
