import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Testimonials from "./Testimonials";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://tranquil-temple-27502.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    <section style={{ background: "#F7F7F6" }} className="py-5">
      <Container>
        <h3 className="text-center py-5">Testimonials</h3>
        <div className="row">
          {review.map((review) => (
            <Testimonials review={review} key={review._id}></Testimonials>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Review;
