import "../styles/Hero.css";
import HeroImage from "../assets/restauranfood.jpg";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <a href="#" className="hero__button">
            Start free trial
          </a>
        </div>

        <div className="hero__image">
          <img src={HeroImage} alt="Little Lemon" />
        </div>
      </div>
    </section>
  );
}
