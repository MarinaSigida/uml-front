import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-contact">
            <h3>Contactez-nous</h3>
            <address>
              <p>randonist.fr@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="footer-navigation">
          <NavLink to="/posts">Blog</NavLink>
          <NavLink to="/my-posts">Mes posts</NavLink>
          <NavLink to="/create-post">Ajouter un post</NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
