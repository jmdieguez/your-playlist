import React, { useState } from 'react';
import Track from './Track';
import styles from '../styles/App.module.css';

const TrackList = ({ topTracks }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTracks, setSelectedTracks] = useState([]);
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

  const handleAddTrack = (trackId) => {
    setSelectedTracks((prevSelected) => [...prevSelected, trackId]);
  };

  const handleRemoveTrack = (trackId) => {
    setSelectedTracks((prevSelected) => prevSelected.filter((id) => id !== trackId));
  };

  return (
    <>
        <div className={styles['track-container']}>

            <div className={styles['single-track-container']}>
                {currentTracks.map((track, index) => (
                <div key={index} className={styles['track']}>
                    <Track id={track.id} />
                    
                    {selectedTracks.includes(track) ? (
                        <button className={styles['remove-button']} onClick={() => handleRemoveTrack(track)}>
                            Remove
                        </button>
                        ) : (
                        <button className={styles['select-button']} onClick={() => handleAddTrack(track)}>
                            Add
                        </button>
                        )
                    }
                </div>
                ))}
            </div>

            <div className={styles['selected-tracks-container']}>
                <h2>Selected Tracks</h2>
                
                <ul>
                {selectedTracks.map((t) => (
                    <li key={t}>
                        {t.name} - {t.artists.map((artist) => artist.name).join(', ')}
                    </li>
                ))}
                </ul>
            </div>
        </div>

        {/* Next and Previous buttons */}

        <div className={styles['button-container']}>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Previous
            </button>
            <button onClick={handleNextPage}>Next</button>
        </div>
    
    </>
  );
};

export default TrackList;