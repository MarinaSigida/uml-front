import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cross from '../../assets/images/close.png';
import logoutIcon from '../../assets/images/logout.png';
import userIcon from '../../assets/images/user.png';
import { OverlayBurgerMenu } from './OverlayBurgerMenu';

const ModalBurgerMenu = ({ isModalOpen, closeModal }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <OverlayBurgerMenu onClick={handleBackdropClick}>
        <div
          className={`modal-burger-menu-container ${
            isModalOpen ? 'open' : 'closed'
          }`}
        >
          <div onClick={closeModal} className="icon-close">
            <img src={cross} alt="close" />
          </div>
          <div className="burger-menu-navigation">
            <NavLink to="/" end onClick={closeModal}>
              Accueil
            </NavLink>
            <NavLink to="/posts" onClick={closeModal}>
              Blog
            </NavLink>
            <NavLink to="/my-posts" onClick={closeModal}>
              Mes posts
            </NavLink>
            <NavLink to="/create-post" onClick={closeModal}>
              Ajouter un post
            </NavLink>
          </div>
          <div className="burger-menu-basket-and-login">
            {/* {!user && ( */}
            <NavLink to="/login" onClick={closeModal}>
              <img src={userIcon} alt="user" className="icon" />
            </NavLink>
            {/* )} */}
            {/* {user && ( */}
            <button className="logout-button">
              <img src={logoutIcon} className="icon" alt="logout-icon" />
            </button>
            {/* )} */}
          </div>
        </div>
      </OverlayBurgerMenu>
    </>
  );
};

export default ModalBurgerMenu;
