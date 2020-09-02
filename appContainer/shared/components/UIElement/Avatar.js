import React from 'react';
const Avatar = props => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />

      <style jsx>{`
      .avatar {
      width: 100%;
      height: 100%;
      display: flex; 
      justify-content: center;
      align-items: center;
    }
    
    .avatar img {
      display: block;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
      `}</style>
    </div>
  );
};

export default Avatar;
