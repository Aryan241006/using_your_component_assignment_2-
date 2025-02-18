import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
  const { username, profilePicture, content, timestamp, image } = post;

  const styles = {
    postCard: {
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '16px',
      marginBottom: '20px',
      maxWidth: '600px',
      width: '100%'
    },
    postHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '12px'
    },
    profilePicture: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginRight: '12px'
    },
    postInfo: {
      flex: 1
    },
    username: {
      margin: 0,
      fontSize: '1rem',
      fontWeight: 600,
      color: '#1a1a1a'
    },
    timestamp: {
      margin: 0,
      fontSize: '0.8rem',
      color: '#65676b'
    },
    postContent: {
      margin: '12px 0',
      fontSize: '0.95rem',
      lineHeight: 1.5,
      color: '#1a1a1a'
    },
    postImageContainer: {
      margin: '12px -16px'
    },
    postImage: {
      width: '100%',
      maxHeight: '400px',
      objectFit: 'cover'
    },
    postActions: {
      display: 'flex',
      gap: '12px',
      marginTop: '12px',
      paddingTop: '12px',
      borderTop: '1px solid #e4e6eb'
    },
    actionButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '20px',
      backgroundColor: '#f0f2f5',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
      fontSize: '0.9rem',
      color: '#65676b'
    }
  };

  return (
    <div style={styles.postCard}>
      <div style={styles.postHeader}>
        <img 
          src={profilePicture} 
          alt={`${username}'s profile`} 
          style={styles.profilePicture}
        />
        <div style={styles.postInfo}>
          <h3 style={styles.username}>{username}</h3>
          <p style={styles.timestamp}>{timestamp}</p>
        </div>
      </div>
      <p style={styles.postContent}>{content}</p>
      {image && (
        <div style={styles.postImageContainer}>
          <img src={image} alt="Post content" style={styles.postImage} />
        </div>
      )}
      <div style={styles.postActions}>
        <LikeButton />
        <button style={styles.actionButton}>
          💬 Comment
        </button>
        <button style={styles.actionButton}>
          📤 Share
        </button>
      </div>
    </div>
  );
};

export default PostCard;