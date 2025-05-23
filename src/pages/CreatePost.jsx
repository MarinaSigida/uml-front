import { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [geoURL, setGeoURL] = useState('');
  const [author, setAuthor] = useState('');
  const [difficultyLvl, setDifficultyLvl] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [duration, setDuration] = useState(0);
  const [photoUrl, setPhotoUrl] = useState('');

  const addPhoto = () => {
    if (!photoUrl) return;
    setPhotos([...photos, { id: Date.now().toString(), url: photoUrl }]);
    setPhotoUrl('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      geoURL,
      author,
      difficultyLvl,
      photos,
      duration,
    };

    console.log('Form Data:', formData);
    alert('Form submitted! See console.');
  };
  return (
    <div className="main">
      <section className="post-section">
        <div className="add-post-item-form-wrapper">
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Title:{' '}
                <div className="add-post-item-input">
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>
            <div>
              <label>
                Description:{' '}
                <div className="add-post-item-input">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>
            <div>
              <label>
                Geo URL:{' '}
                <div className="add-post-item-input">
                  <input
                    value={geoURL}
                    onChange={(e) => setGeoURL(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>
            <div>
              <label>
                Auteur:
                <div className="add-post-item-input">
                  <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                  />
                </div>
              </label>
            </div>

            <div>
              <label>
                Photo URL:{' '}
                <div className="add-post-item-input">
                  <input
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                  />
                </div>
              </label>
              <div
                className="form-button-container"
                style={{ marginBottom: '10px' }}
              >
                <button type="button" onClick={addPhoto}>
                  Ajouter une photo
                </button>
              </div>
            </div>
            <ul>
              {photos.map((photo) => (
                <li key={photo.id}>{photo.url}</li>
              ))}
            </ul>
            <div>
              <label>
                Niveau de difficulté:{' '}
                <div className="add-post-item-input">
                  <input
                    type="number"
                    value={difficultyLvl}
                    onChange={(e) => setDifficultyLvl(Number(e.target.value))}
                    min={1}
                    max={5}
                    required
                  />
                </div>
              </label>
            </div>
            <div>
              <label>
                Durée:{' '}
                <div className="add-post-item-input">
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    min={0}
                    required
                  />
                </div>
              </label>
            </div>
            <div className="form-button-container">
              <button type="submit">Créer un compte</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreatePost;
