import React from 'react';
import PostCard from './components/postcard';

function App() {
  const styles = {
    app: {
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center' 
    },
    appHeader: {
      textAlign: 'center',
      marginBottom: '32px',
      width: '100%'
    },
    heading: {
      color: '#1a1a1a',
      fontSize: '2rem',
      margin: 0
    },
    feedContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '600px',
      width: '100%',
      margin: '0 auto',
      gap: '20px',
      padding: '0 20px'
    }
  };

  // Sample posts data
  const posts = [
    {
      id: 1,
      username: "JohnDoe",
      profilePicture: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      content: "Just finished my morning workout! 💪 Starting the day with positive energy!",
      timestamp: "2 hours ago",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      username: "EmmaWatson",
      profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      content: "Beautiful sunset at the beach today! 🌅 Nature never fails to amaze me.",
      timestamp: "5 hours ago",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      username: "TechGuy",
      profilePicture: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      content: "Just launched my new coding project! Check it out and let me know what you think! 🚀 #coding #webdev",
      timestamp: "1 day ago"
    }
  ];

  return (
    <div style={styles.app}>
      <header style={styles.appHeader}>
        <h1 style={styles.heading}>Social Feed</h1>
      </header>
      <main style={styles.feedContainer}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
}

export default App;