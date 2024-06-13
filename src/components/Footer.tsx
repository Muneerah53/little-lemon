import { Link } from 'react-router-dom';

export const Footer = () => {
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
    <footer>
      <div className="footer__content">
        <img
          src="/logo-white.png"
          alt="Little Lemon Logo"
          className="footer__logo"
        />
        <div className="footer__links">
          <h4>Little Lemon</h4>
          <NavLinks />
        </div>
        <div className="footer__contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="https://maps.google.com/maps?q=Chicago, IL 60601">
                Address: 123 Main Street, Chicago, IL 60601
              </a>
            </li>
            <li>
              <a href="tel:+13125551234">Phone Number: +1 (312) 555-1234</a>
            </li>

            <li>
              <a href="mailto:info@littlelemon.com">
                Email: info@littlelemon.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__socials">
          <h4>Social Media Links</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com">
                <img src="/socials/instagram.svg" alt="instagram link" />
              </a>
            </li>

            <li>
              <a href="https://www.x.com">
                <img src="/socials/x.svg" alt="x link" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com">
                <img src="/socials/facebook.svg" alt="Facebook link" />
              </a>
            </li>

            <li>
              <a href="https://www.tiktok.com">
                <img src="/socials/tiktok.svg" alt="tiktok link" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="footer__copyright">
        &copy; 2024 Muneerah S. | Coursera Front-End Developer Capstone Project.
        All rights reserved.
      </p>
    </footer>
  );
};
