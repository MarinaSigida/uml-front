import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BurgerMenuBtn from './BurgerMenu/BurgerMenuBtn';
import ModalBurgerMenu from './BurgerMenu/ModalBurgerMenu';

import logo from '../assets/images/logo.png';
import logoutIcon from '../assets/images/logout.png';
import userIcon from '../assets/images/user.png';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <nav className="header">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" width={124} />
          </NavLink>
        </div>
        <div className="header-bar">
          <div className="header-name">
            <NavLink to="/">
              <h2>Randonist.fr</h2>
            </NavLink>
          </div>
          <div className="header-navigation">
            <NavLink to="/" end>
              Accueil
            </NavLink>
            <NavLink to="/posts">Blog</NavLink>
            <NavLink to="/my-posts">Mes posts</NavLink>
            <NavLink to="/create-post">Ajouter un post</NavLink>
          </div>

          <div className="basket-and-login">
            <NavLink to="/login">
              <img src={userIcon} alt="user" className="icon" />
            </NavLink>

            <button className="logout-button">
              <img src={logoutIcon} className="icon" alt="logout-icon" />
            </button>
          </div>
          <BurgerMenuBtn onClick={toggleModal} />
        </div>
      </nav>
      {isModalOpen && (
        <ModalBurgerMenu isModalOpen={isModalOpen} closeModal={toggleModal} />
      )}
    </div>
  );
};

export default Header;
