import { useEffect, useState } from 'react';

const mockPosts = [
  {
    title: 'Mountain Trail',
    description: 'Beautiful trail in the mountains.',
    geoURL: 'https://maps.google.com/example1',
    author: 'Alice',
    difficultyLvl: 4,
    photos: [
      {
        id: 'p1',
        url: 'https://arcticnuvsvaag.no/wp-content/uploads/2021/11/nuvsvag-randonee-jan-martin-kristensen.jpg',
      },
      {
        id: 'p2',
        url: 'https://arcticnuvsvaag.no/wp-content/uploads/2021/11/nuvsvag-fjell-sjo-randonee-jan-martin-kristensen.jpg',
      },
    ],
    duration: 5,
  },
  {
    title: 'Forest Walk',
    description: 'Peaceful walk through the woods.',
    geoURL: 'https://maps.google.com/example2',
    author: 'Bob',
    difficultyLvl: 2,
    photos: [
      {
        id: 'p3',
        url: 'https://images.frandroid.com/wp-content/uploads/2019/07/toomas-tartes-yizrl9n-eda-unsplash-1200x801.jpg',
      },
    ],
    duration: 2,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/posts/get-posts');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="main">
      <h2>Posts</h2>
      <div className="posts-list">
        {posts.map((post, index) => (
          <div
            key={index}
            className="post-card"
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              marginBottom: '1rem',
            }}
          >
            <h3 className="post-title">{post.title}</h3>
            <p>
              <strong>Description:</strong> {post.description}
            </p>
            <p>
              <strong>Geo URL:</strong>{' '}
              <a href={post.geoURL} target="_blank" rel="noreferrer">
                {post.geoURL}
              </a>
            </p>
            <p>
              <strong>Auteur:</strong> {post.author}
            </p>
            <p>
              <strong>Niveau de difficulté:</strong> {post.difficultyLvl}
            </p>
            <p>
              <strong>Durée:</strong> {post.duration} hour(s)
            </p>
            <div>
              <div
                style={{ display: 'flex', gap: '10px', marginTop: '0.5rem' }}
              >
                {post.photos.map((photo) => (
                  <div className="post-card-image">
                    <img key={photo.id} src={photo.url} alt="Post" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Posts;
