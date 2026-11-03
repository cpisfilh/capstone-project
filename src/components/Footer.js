import logo from "../assets/FooterLogo.png";
import "../styles/Footer.css";

export function Footer() {
  return (
    <footer className="container footer-content">
      <a href="/">
        <img src={logo} width="150" alt="Little Lemon Logo" />
      </a>
      <div className="footer-nav">
        <nav>
          <h4>Doormat Navigation</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order-online">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>

        <nav>
          <h4>Contact</h4>
          <ul>
            <li>Dirección del establecimiento</li>
            <li>
              <a href="tel:+51000000000">Número de teléfono</a>
            </li>
            <li>
              <a href="mailto:contacto@ejemplo.com">contacto@ejemplo.com</a>
            </li>
          </ul>
        </nav>

        <nav>
          <h4>Social Media Links</h4>

          <ul>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
