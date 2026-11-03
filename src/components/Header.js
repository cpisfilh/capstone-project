import logo from "../assets/Logo.svg";
import { Nav } from "./Nav";
import "../styles/Header.css";
import { MobileMenu } from "./MobileMenu";

export function Header() {

  return (
    <header className="header">
      <div className="container header-content">
        <a href="/">
          <img src={logo} width="150" alt="Little Lemon Logo" />
        </a>
        <Nav />
        <MobileMenu />
      </div>
    </header>
  );
}
