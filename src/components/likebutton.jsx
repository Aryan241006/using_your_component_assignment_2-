import React, { useState } from 'react';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button 
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '20px',
        backgroundColor: isLiked ? '#ffebee' : '#f0f2f5',
        color: '#65676b', 
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        fontSize: '0.9rem', 
      }}
      onClick={handleLikeClick}
    >
      <span style={{ fontSize: '1.2rem' }}>
        {isLiked ? '❤️' : '🤍'}
      </span>
      <span style={{ fontWeight: 500 }}>
        {isLiked ? 'Liked' : 'Like'}
      </span>
    </button>
  );
};

export default LikeButton;