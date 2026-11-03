import "../styles/About.css";
import AboutImage1 from "../assets/restaurant_chef_B.jpg";
import AboutImage2 from "../assets/restaurant.jpg";

export function About() {
  return (
    <section className="about" aria-labelledby="about-title">

      <div className="container about__container">

        {/* Information */}
        <div className="about__content">

          <header className="about__header">
            <h2 id="about-title">Little Lemon</h2>
            <h3>Chicago</h3>
          </header>

          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt
            nostrud amet. Amet minim mollit non deserunt ullamco
            est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>

        </div>

        {/* Images */}
        <div className="about__images">

          <figure className="about__image about__image--back">
            <img
              src={AboutImage1}
              alt="Interior del restaurante Little Lemon"
            />
          </figure>

          <figure className="about__image about__image--front">
            <img
              src={AboutImage2}
              alt="Ambiente del restaurante Little Lemon"
            />
          </figure>

        </div>

      </div>

    </section>
  );
}