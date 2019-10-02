import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDotCircle,
  faTimesCircle,
  faPenNib
} from '@fortawesome/free-solid-svg-icons';
import navbarStyles from './Navbar.module.scss';
import Button, { ButtonTypes } from '../components/Button';
import Logo, { LogoContentTypes } from '../components/Logo';

const NavBarTypes = {
  PRIMARY: 'primary',
  INVERT: 'invert'
};

const NavbarBurger = ({ onToggleMenu }) => (
  <a
    href='#'
    role='button'
    className='navbar-burger'
    data-target='navMenu'
    aria-label='menu'
    aria-expanded='false'
    onClick={onToggleMenu}>
    <span aria-hidden='true'></span>
    <span aria-hidden='true'></span>
    <span aria-hidden='true'></span>
  </a>
);

const NavbarMenu = ({ isActive }) => (
  <div
    id='mainNavbar'
    className={`navbar-menu ${navbarStyles.menuCustom} ${isActive &&
      'is-active'}`}>
    <div className='navbar-end'>
      <div className='navbar-item'>
        <div className={`field ${navbarStyles.fieldCustom}`}>
          <p className='control'>
            <a
              href='https://blog.viba.studio'
              className={`button is-primary ${navbarStyles.blogLink}`}>
              <span className='icon has-text-info'>
                <FontAwesomeIcon icon={faPenNib} />
              </span>
              <span>My Blog</span>
            </a>
          </p>
        </div>
      </div>
      <div className='navbar-item'>
        <div className={`field ${navbarStyles.fieldCustom}`}>
          <p className='control'>
            <AnchorLink href='#cta-section'>
              <Button state={ButtonTypes.CTA}>
                <span className='icon has-text-white'>
                  <FontAwesomeIcon icon={faDotCircle} />
                </span>
                <span>Talk to me</span>
              </Button>
            </AnchorLink>
          </p>
        </div>
      </div>
    </div>
  </div>
);
const PrimaryNavBar = ({ isActive, toggleMenu }) => {
  return (
    <>
      <div className='navbar-brand'>
        <a className='navbar-item' href='/'>
          <Logo state={LogoContentTypes.PRIMARY} />
        </a>
        <NavbarBurger onToggleMenu={() => toggleMenu(!isActive)} />
      </div>
      <NavbarMenu isActive={isActive} />
    </>
  );
};
const InvertNavBar = () => {
  return (
    <div className={`container ${navbarStyles.invertNavBar}`}>
      <div className='navbar-brand'>
        <a className='navbar-item' href='/'>
          <Logo state={LogoContentTypes.INVERT} />
        </a>
      </div>
      <a href='/' className={navbarStyles.closeIcon}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </a>
    </div>
  );
};
const NavbarBase = ({ state }) => {
  const [isActive, toggleMenu] = useState(false);

  const renderNavBar = () => ({
    primary: <PrimaryNavBar isActive={isActive} toggleMenu={toggleMenu} />,
    invert: <InvertNavBar />
  });
  return (
    <nav className={`navbar is-transparent ${navbarStyles.customNavbar}`}>
      {renderNavBar()[state]}
    </nav>
  );
};

export default NavbarBase;
export { NavBarTypes };
