import quotation from "../../../../assets/images/restaurant/coma.png";
import reviewImage from "../../../../assets/images/restaurant/Video.png";
const TestimonialData = ({ reviewData }) => {
  const { name, location, img, review } = reviewData;
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:px-20 px-5 lg:w-full lg:h-full">
      <div className="bg-[#FEBF00] lg:p-20 p-5 flex flex-col lg:justify-between w-full lg:h-[556px] order-2 lg:order-1">
        <div className="lg:-mt-10">
          <div>
            <img src={quotation} alt="" />
          </div>
          <div className=" text-black mx-5 lg:static">
            <p>{review}</p>
          </div>
        </div>
        <div className="flex justify-between items-end ml-5 pb-4 text-black border-b-2  border-black lg:mt-0 sm:mt-5">
          <div>
            <h3>{name}</h3>
            <p>{location}</p> 
          </div>
          <div className="">
            <img src={img} alt="" />
          </div>
        </div>
        
      </div>
      <div className="order-1 lg:order-2">
        <img className="h-full w-full object-cover" src={reviewImage} alt="" />
      </div>
    </div>
  );
};

export default TestimonialData;
