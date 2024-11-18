import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";
import FoodDetails from "../FoodDetails/FoodDetails";
import PreviousArrowButton from "../../../../utils/PreviousArrowButton";
import NextArrowButton from "../../../../utils/NextArrowButton";

const PopularFoodItem = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => {
        setFoodItems(data);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    prevArrow: <PreviousArrowButton />,
    nextArrow: <NextArrowButton />,
    responsive: [
      {
        breakpoint: 640, // Small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="slider-container lg:px-20">
        <Slider {...settings}>
          {foodItems.map((food) => (
            <FoodDetails key={food._id} food={food}></FoodDetails>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularFoodItem;
