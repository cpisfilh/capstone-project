import { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenuImage from "../assets/hamburger_menu_icon.svg";
import "../styles/MobileMenu.css";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mobile-menu">
      <button
        type="button"
        className="mobile-menu-toggle"
        aria-label="On Click"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={BurgerMenuImage} alt="Burger Menu" />
      </button>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`mobile-menu-content ${isOpen ? "show" : ""}`}
        hidden={!isOpen}
      >
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