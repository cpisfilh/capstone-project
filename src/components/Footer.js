import logo from "../assets/FooterLogo.png";

export function Footer() {
  return (
    <footer className='container footer-content'>
        <a href="/">
          <img src={logo} width="150" alt="Little Lemon Logo" />
        </a>

      <nav>
        <h3>Doormat Navigation</h3>
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

      <div>
        <h3>Contact</h3>

        <address>
          <p>Dirección del establecimiento</p>
          <p>
            <a href="tel:+51000000000">Número de teléfono</a>
          </p>
          <p>
            <a href="mailto:contacto@ejemplo.com">contacto@ejemplo.com</a>
          </p>
        </address>
      </div>

      <nav>
        <h3>Social Media Links</h3>

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
    </footer>
  );
}
