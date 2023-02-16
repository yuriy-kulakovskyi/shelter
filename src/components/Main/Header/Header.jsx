import React from 'react';
import logo from "./img/logo.png";
import "./Header.scss";
import Button from '../Button/Button';

const nav = [
  "Хто ми",
  "Наша діяльність",
  "Команда",
  "Контакти"
];

const Header = () => {
  return (
    <header className="header">
      <img className='header__image' src={logo} alt="Logo" />

      <nav className="header__nav">
        {nav.map((item, key) => {
          return (
            <a key={key} href="#" className='header__nav__item'>{item}</a>
          );
        })}
      </nav>

      <Button 
        content="Підтримати"
      />
    </header>
  );
}

export default Header;
