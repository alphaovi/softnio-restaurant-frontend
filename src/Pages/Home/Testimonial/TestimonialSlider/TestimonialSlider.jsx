import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import TestimonialData from "./TestimonialData";
import PreviousArrowButton from "../../../../utils/PreviousArrowButton";
import NextArrowButton from "../../../../utils/NextArrowButton";

const TestimonialSlider = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    prevArrow: <PreviousArrowButton />,
    nextArrow: <NextArrowButton />,
  };

  return (
    <div className="">
      <Slider {...settings}>
        {reviews.map((reviewData) => (
          <TestimonialData
            key={reviewData._id}
            reviewData={reviewData}
          ></TestimonialData>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
