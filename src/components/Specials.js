import "../styles/Specials.css";
import GreekSaladImage from "../assets/greek_salad.jpg";
import BruchettaImage from "../assets/bruchetta.svg";
import LemonDessertImage from "../assets/lemon_dessert.jpg";
import { Button } from "./ui/Button";
import { Link, useNavigate } from "react-router-dom";

const dishes = [
  {
    id: 1,
    name: "Greek salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: GreekSaladImage,
  },
  {
    id: 2,
    name: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: BruchettaImage,
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: LemonDessertImage,
  },
];

export function Specials() {
  const navigate = useNavigate();

  return (
    <section className="specials">
      <div className="container specials__container">
        {/* Header */}
        <header className="specials__header">
          <h2>Specials</h2>

          <Button onClick={() => navigate("/online-menu")} >
            Online Menu
          </Button>
        </header>

        {/* Cards */}
        <div className="specials__grid">
          {dishes.map((dish) => (
            <article className="special-card" key={dish.id}>
              <img
                className="special-card__image"
                src={dish.image}
                alt={dish.name}
              />

              <div className="special-card__content">
                <div className="special-card__header">
                  <h3>{dish.name}</h3>
                  <span>{dish.price}</span>
                </div>

                <p>{dish.description}</p>

                <Link to="/order-online" className="special-card__link">
                  Order a delivery
                  <span aria-hidden="true">♟</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
