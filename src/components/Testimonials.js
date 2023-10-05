import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/Testimonials.css"; // Include your CSS file for additional styling

function Testimonials() {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment:
        "This website has the best collection of games! I can't stop playing. Highly recommended.",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      comment:
        "Great user experience and a wide variety of games to choose from. Loving it!",
    },
    {
      id: 3,
      name: "Mike Johnson",
      rating: 5,
      comment:
        "I've been a loyal user for years. The games keep getting better. Two thumbs up!",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      rating: 4,
      comment:
        "Fun, engaging, and addictive games. Perfect way to spend my free time.",
    },
    {
      id: 5,
      name: "Ella Brown",
      rating: 5,
      comment: "The quality of games here is outstanding. I'm hooked!",
    },
    {
      id: 6,
      name: "David Clark",
      rating: 4,
      comment:
        "I recommend this website to all my friends. It's a great source of entertainment.",
    },
  ];

  return (
    <div className="testimonials">
      <div className="testimonials-container">
        <h2>
          <strong>What Our Users Say</strong>
        </h2>
        <Carousel infiniteLoop autoPlay showStatus={false}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <p className="comment">{testimonial.comment}</p>
              <div className="user-info">
                <span className="user-name">{testimonial.name}</span>
                <span className="user-rating">
                  Rating: {testimonial.rating}/5
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;
