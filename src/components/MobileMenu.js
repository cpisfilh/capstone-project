import { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenuImage from "../assets/hamburger_menu_icon.svg";
import "../styles/MobileMenu.css";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mobile-menu">
      <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <img src={BurgerMenuImage} alt="Burger Menu" />
      </button>
      <nav className={`mobile-menu-content ${isOpen ? "show" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}