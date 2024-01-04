import React, { useState } from 'react';
import styles from '../styles/App.module.css';
import Track from './Track';

const TrackList = ({ topTracks }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const tracksPerPage = 5;
  
    const startIndex = (currentPage - 1) * tracksPerPage;
    const endIndex = startIndex + tracksPerPage;
    const currentTracks = topTracks.slice(startIndex, endIndex);
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
      }
    };
  
    return (
        <>
          <div className={styles["track-container"]}>
            {currentTracks.map((track, index) => (
              <div key={index} className={styles.track}>
                <Track id={track.id} />
              </div>
            ))}
          </div>
          <div className={styles["button-container"]}>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button onClick={handleNextPage}>Next</button>
          </div>
        </>
      );
};
  
export default TrackList;