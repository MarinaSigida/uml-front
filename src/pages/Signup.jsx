import { useState } from 'react';
import loginImage from '../assets/images/login-background.jpg';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { lastName, firstName, email, password };

    try {
      const res = await fetch('http://localhost:3000/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (res.ok) {
        alert('User created successfully!');
        console.log('Response:', data);
      } else {
        alert('Error: ' + data.message);
        console.error('Server error:', data);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error: ' + error.message);
    }
  };
  return (
    <div className="main">
      <div className="login-container">
        <div
          className="login-background-image"
          style={{ backgroundImage: `url(${loginImage})` }}
        ></div>
        <div className="login-form-wrapper">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>BIENVENUE</h2>
            <div className="login-inputs">
              <div className="login-input">
                <input
                  type="text"
                  value={lastName}
                  placeholder="Nom"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="login-inputs">
              <div className="login-input">
                <input
                  type="text"
                  placeholder="Prénom"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="login-inputs">
              <div className="login-input">
                <input
                  type="email"
                  value={email}
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <div className="login-input ">
                <input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" style={{ marginTop: '1rem' }}>
              Créer un compte
            </button>
          </form>
          <div className="signup-link">
            <a href="login">J'ai déja un compte</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
