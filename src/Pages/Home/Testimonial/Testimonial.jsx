import TestimonialSlider from "./TestimonialSlider/TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="lg:p-32">
      <div className="flex items-center gap-2 lg:px-20 px-5 lg:mt-0 sm:mt-5">
        <p className="w-1 h-1 bg-[#BD1F17] p-1 shadow-lg"></p>
        <p className="text-[#BD1F17] text-xl font-bold lg:h-[32px]">Crispy, Every Bite Taste</p>
      </div>
      <div className="lg:mb-10">
        <p className="lg:px-20 px-5 text-3xl font-bold text-black uppercase">
          What Some of my Customers Say
        </p>
      </div>
      <div>
        <TestimonialSlider></TestimonialSlider>
      </div>
    </div>
  );
};

export default Testimonial;
