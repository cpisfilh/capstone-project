import "../styles/CustomersSay.css";
import Customer1Image from "../assets/customers/customer1.jpg";
import Customer2Image from "../assets/customers/customer2.jpg";
import Customer3Image from "../assets/customers/customer3.jpg";
import Customer4Image from "../assets/customers/customer4.jpg";

const testimonials = [
  {
    id: 1,
    rating: 5,
    name: "John",
    image: Customer1Image,
    review: "The food was delicious and the service was excellent!",
  },
  {
    id: 2,
    rating: 4,
    name: "Sarah",
    image: Customer2Image,
    review: "Amazing experience! I will definitely come back.",
  },
  {
    id: 3,
    rating: 5,
    name: "Michael",
    image: Customer3Image,
    review: "Great atmosphere and delicious food. Highly recommended!",
  },
  {
    id: 4,
    rating: 5,
    name: "Emily",
    image: Customer4Image,
    review: "One of the best restaurants in Chicago!",
  },
];

export function CustomersSay() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="container testimonials__container">

        <h2 id="testimonials-title">
          Testimonials
        </h2>

        <div className="testimonials__grid">

          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.id}>

              <p className="testimonial-card__rating">
                Rating: {testimonial.rating} out of 5
              </p>

              <header className="testimonial-card__header">

                <img
                  src={testimonial.image}
                  alt=""
                  className="testimonial-card__image"
                />

                <h3 className="testimonial-card__name">
                  {testimonial.name}
                </h3>

              </header>

              <blockquote className="testimonial-card__review">
                {testimonial.review}
              </blockquote>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}