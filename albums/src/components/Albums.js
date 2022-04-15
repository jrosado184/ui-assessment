import React, { useState } from "react";
import "./Albums.css";
import data from "../albums.json";

const Albums = () => {
  const [albums, setAlbums] = useState(data);

  const AltAttributes = (num) => {
    const title = albums[num].artworkUrl.toString().split("/");
    return title[title.length - 1];
  };

  const handleDelete = (title) => {
    setAlbums(albums.filter((data) => data.title !== title));
  };

  const sort = (e) => {
    const choice = e.target.value;
    return choice === "Artist Name"
      ? setAlbums((album) => [
          ...album.sort((a, b) => a.artist.localeCompare(b.artist)),
        ])
      : choice === "Album Name"
      ? setAlbums((album) => [
          ...album.sort((a, b) => a.title.localeCompare(b.title)),
        ])
      : null;
  };

  return (
    <>
      <div className='middle-section'>
        {albums.length ? (
          <div className='title-container'>
            <h1 className='title'>Your music</h1>
            <div className='sorting'>
              <p className='sort-title'>Sort by</p>
              <select onChange={sort}>
                <option>select</option>
                <option value='Artist Name'>Artist</option>
                <option value='Album Name'>Album</option>
              </select>
            </div>
          </div>
        ) : (
          <h2>No music available</h2>
        )}
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
              <img
                className='artwork'
                src={album.artworkUrl}
                alt={AltAttributes(index)}
              />
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
