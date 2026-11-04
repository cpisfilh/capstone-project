import "../styles/Hero.css";
import HeroImage from "../assets/restauranfood.jpg";
import { Button } from "./ui/Button";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Button onClick={() => navigate("/reservations")}>
            Book now
          </Button>
        </div>

        <div className="hero__image">
          <img src={HeroImage} alt="Dish of Little Lemon" />
        </div>
      </div>
    </section>
  );
}
