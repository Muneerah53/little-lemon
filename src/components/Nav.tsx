import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HamburgerMenu } from '../assests/icons/hamburger menu.svg';

export const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const NavLinks = () => {
    return (
      <ul>
        <li>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="#about" className="nav-item">
            About
          </Link>
        </li>
        <li>
          <Link to="#menu" className="nav-item">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/booking" className="nav-item">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="#order" className="nav-item">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="#login" className="nav-item">
            Log in
          </Link>
        </li>
      </ul>
    );
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar__content">
          <img
            src="/logo.svg"
            alt="Little Lemon Logo"
            className="navbar__logo"
          />

          <div className="navbar__links">
            <NavLinks />
          </div>

          <div className="navbar__menu-icon">
            <button
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
              }}
            >
              <HamburgerMenu />
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="navbar__mobile-links">
            <NavLinks />
          </div>
        )}
      </nav>
    </>
  );
};
