import { useState } from 'react';
import loginImage from '../assets/images/login-background.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { email, password };

    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Login successful!');
        console.log('User:', data.user);
      } else {
        alert('Login failed: ' + data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Network error during login');
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
              <label>E-mail:</label>
              <div className="login-input">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label>Mot de passe:</label>
              <div className="login-input ">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" style={{ marginTop: '1rem' }}>
              Connexion
            </button>
          </form>
          <div className="signup-link">
            <a href="signup">Créer un compte</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
