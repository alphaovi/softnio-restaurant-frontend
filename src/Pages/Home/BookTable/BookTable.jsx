import tablePhoto from "../../../assets/images/restaurant/f8e8eeffdc29691099a68fb261320bfa.jfif";

const BookTable = () => {
  return (
    <div
      className={`lg:h-[788px] h-[650px] lg:w-full bg-cover bg-center grid grid-cols-2`}
      style={{ backgroundImage: `url(${tablePhoto})` }}
    >
      <div className="mt-10 ">
        <div className="flex items-center gap-2 lg:px-20 px-5">
          <p className="w-1 h-1 bg-[#BD1F17] p-1 shadow-lg"></p>
          <p className="text-[#BD1F17] text-xl font-bold lg:h-[32px]">
            Book Now
          </p>
        </div>
        <p className="lg:text-4xl text-3xl font-bold uppercase text-white lg:px-20 px-5 mt-2 lg:static sm:absolute">
          Book your table
        </p>
        <p className="lg:px-20 px-5 lg:mt-2 sm:mt-14 lg:static sm:absolute">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quis   eveniet, tenetur qui corrupti minima!
        </p>
        <div className="lg:ml-20 sm:ml-5 lg:mt-8 sm:mt-36">
          <div className="grid lg:grid-cols-2 gap-2 ">
            <input
              type="text"
              className="border-2 border-white bg-transparent grow gap-2 h-[46px] p-5 placeholder-white placeholder-right-offset lg:w-full w-[330px]"
              placeholder="Your Name *"
            />
            <input
              type="text"
              className="border-2 border-white bg-transparent grow gap-2 h-[46px] p-5 placeholder-white placeholder-right-offset lg:w-full w-[330px]"
              placeholder="Your Email"
            />
            <input
              type="date"
              className="border-2 border-white bg-transparent grow gap-2 h-[46px] p-5 placeholder-white placeholder-right-offset lg:w-full w-[330px]"
              placeholder="Reservation Date"
            ></input>
            <input
              type="number"
              className="border-2 border-white bg-transparent grow gap-2 h-[46px] p-5 placeholder-white placeholder-right-offset lg:w-full w-[330px]"
              placeholder="Total People"
            />
          </div>
          <div className="mt-2">
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered textarea-lg lg:w-full w-[330px] border-2 border-white bg-transparent grow gap-2 lg:h-[140px] p-5 placeholder-white placeholder-right-offset rounded-none"
            ></textarea>
          </div>
          <div>
            <button className="btn btn-outline hover:text-black hover:bg-yellow-500 bg-yellow-500 mt-5 text-black font-bold rounded-none">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
