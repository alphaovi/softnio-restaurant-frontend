import nextButton from "../assets/images/restaurant/Vector.png";
const NextArrowButton = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="absolute top-0 right-4 transform -translate-x-full -translate-y-1/2 bg-white border border-white-400 text-white p-2 rounded-full lg:mt-0 sm:mt-72"
      >
        <img src={nextButton} alt="" />
      </button>
      ;
    </div>
  );
};

export default NextArrowButton;
