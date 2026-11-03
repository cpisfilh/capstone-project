import logo from "../assets/Logo.svg";
import { Nav } from "./Nav";

export function Header() {
  return (
    <header >
      <div className="container header-content">
        <a href="/">
          <img src={logo} width="150" alt="Little Lemon Logo" />
        </a>
        <Nav />
      </div>
    </header>
  );
}
