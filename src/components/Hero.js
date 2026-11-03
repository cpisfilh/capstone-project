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
            Chicago dfd dfd fdfdf gggsgdd sfs dsfg sdgdsg sdgsg s sdg sdgs ds
            dsgsdgs sdgds sgsdg dfdf
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
