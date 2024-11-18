import previousButton from "../assets/images/restaurant/Vector2.png";

const PreviousArrowButton = ({ onClick }) => {
  return (
    <div className="">
      <button
        onClick={onClick}
        className="absolute  top-auto  right-32 transform translate-x-full -translate-y-1/2 bg-white border 
          text-white p-2 lg:bottom-auto sm:bottom-0 rounded-full"
      >
        <img src={previousButton} alt="" />
      </button>
      ;
    </div>
  );
};

export default PreviousArrowButton;
