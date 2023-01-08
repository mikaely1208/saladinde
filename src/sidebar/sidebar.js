import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';

export default function Sidebar() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/Order">
        Order
      </a>
      <a className="menu-item" href="/Accueil">
        Profile
      </a>
    </Menu>
  );
};