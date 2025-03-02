import React from 'react';

function Highlights() {
  const circleStyle = {
    height: '200px',
    width: '200px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    height: '200px',
    width: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const textStyle = {
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
  };

  return (
    <div>
      <h1 className="text-5xl font-bold mb-1 flex flex-col items-center text-center my-5 font-playfair-display">EVENT HIGHLIGHTS</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '25px' }}>
        <div style={{ display: 'flex', gap: '70px', marginBottom: '70px' }}>
          <div>
            <div style={circleStyle}> <img src="video1.gif" alt="gif1" style={imageStyle} /> </div>
            <div style={textStyle}>24 Hours Hackathon</div>
          </div>
          <div>
            <div style={circleStyle}> <img src="img7.png" alt="gif5" style={imageStyle} /></div>
            <div style={textStyle}>Food and Wifi</div>
          </div>
          <div>
            <div style={circleStyle}> <img src="video2.gif" alt="gif3" style={imageStyle} /></div>
            <div style={textStyle}>Open Source Software</div>
          </div>
          <div>
            <div style={circleStyle}> <img src="video4.gif" alt="gif3" style={imageStyle} /></div>
            <div style={textStyle}>Increase Your Network</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '70px',marginBottom: '100px' }}>
          <div>
            <div style={circleStyle}><img src="video6.gif" alt="gif5" style={imageStyle} /></div>
            <div style={textStyle}>Fun Activities</div>
          </div>
          <div>
            <div style={circleStyle}> <img src="video5.gif" alt="gif5" style={imageStyle} /></div>
            <div style={textStyle}>Culturals</div>
          </div>
          <div>
            <div style={circleStyle}> <img src="video3.gif" alt="gif3" style={imageStyle} /></div>
            <div style={textStyle}>Hangout With Friends</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;