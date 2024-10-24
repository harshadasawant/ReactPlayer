import React from 'react';
import ReactPlayer from 'react-player';

const VideoReactPlayer = () => {
  const styles = {
    container: {
      position: 'relative',       // Fixed position to cover the whole screen
      top: 0,
      left: 0,
      width: '100vw',          // Full viewport width
      height: '100vh',         // Full viewport height
      overflow: 'hidden',      // Hide scrollbars
      margin: 0,              // No margin
      padding: 0, 
      display : 'flex',
    //  flex-direction: 'column'  
    },
    playerWrapper: {
      position: 'absolute',    // Position relative to container
      top: 0,
      left: 0,
      width: '100%',           // Full width
      height: '100%',          // Full height
      overflow: 'hidden',      // Prevent scrollbars
    },
    reactPlayer: {
      position: 'absolute',    // Position relative to wrapper
      top: 0,
      left: 0,
      width: '100%',           // Fill the width of the wrapper
      height: '100%',          // Fill the height of the wrapper
      objectFit: 'cover',      // Ensure the video covers the area
    },
  };

  return (
    <div style={styles.container}>
      <section className="section">
        {/* <h1>ReactPlayer Demo</h1> */}
        <div style={styles.playerWrapper}>
          <ReactPlayer
            className="react-player"
            url="assets/video/Wildlife.mp4"
            width="100%"             // Fill the width
            height="100%"            // Fill the height
            controls={true}
            style={styles.reactPlayer} // Apply styles
          />
        </div>
      </section>
    </div>
  );
};

export default VideoReactPlayer;
