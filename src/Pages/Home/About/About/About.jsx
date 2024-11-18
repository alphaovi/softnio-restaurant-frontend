import aboutImage from "../../../../assets/images/restaurant/59d1a08b55f1f4e0621185f67f433fba.jfif";
import callImage from "../../../../assets/images/restaurant/call-alt.png";
import img1 from "../../../../assets/images/restaurant/package.png";
import img2 from "../../../../assets/images/restaurant/medal.png";
import img3 from "../../../../assets/images/restaurant/bag.png";
// import circleImage from "../../../../assets/images/restaurant/Ellipse 10.png";
const About = () => {
  return (
    <section className="bg-white text-black lg:mb-20 sm:mb-10">
      <div className="lg:grid grid-cols-2 gap-6 lg:p-20">
        <div className="my-20 ">
          {/* <div className="flex  border-2 border-white bg-white z-40">
            <div className="flex -mb-20">
              <p className="text-xl font-bold -mr-16 mt-6 ml-10">50+</p>
              <img className="" src={circleImage} alt="" />
            </div>
            <div className="ml-16">
              <p className="text-xl">
                Market <br /> Experience
              </p>
            </div>
          </div> */}
          <div className="sm:px-10 lg:p-0">
            <img className="w-full" src={aboutImage} alt="" />
          </div>
        </div>
        <div className="lg:mt-20  lg:ml-20 lg:p-0 sm:px-5 ">
          <div className="lg:px-0 sm:px-4">
            <ul className=" flex gap-5 font-bold text-2xl border-b-2 border-[#B52B1D] ">
              <li className="btn bg-transparent text-black hover:bg-[#B52B1D] hover:text-white border-none rounded-none cursor-pointer">
                About
              </li>
              <li className="btn bg-transparent text-black hover:bg-[#B52B1D] hover:text-white  border-none cursor-pointer rounded-none">
                Experience
              </li>
              <li className="btn bg-transparent text-black hover:bg-[#B52B1D] hover:text-white border-none cursor-pointer rounded-none">
                Contact
              </li>
            </ul>
          </div>
          <div className="mt-4 lg:px-0 sm:px-5">
            <h2 className="text-3xl font-bold uppercase">
              Exceptional culinary
            </h2>
            <h2 className="text-3xl font-bold uppercase">
              experience and delicious food{" "}
            </h2>
            <p className="text-xl mt-5 lg:px-0 sm:px-1">
              uppercase Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium maiores non distinctio earum repellendus voluptatem
              enim, iure nihil consectetur adipisicing elit. Laudantium maiores
              non distinctio earum repellendus voluptatem enim, iure nihil
              corrupti sapiente!
            </p>
            <div className="mt-5 flex font-bold ">
              <button className="btn btn-warning uppercase rounded-none font-bold">
                About more
              </button>
              <p className="mt-3 lg:ml-6 sm:ml-4 flex gap-1">
                <img className="w-6 h-6" src={callImage} alt="" />
                +88 1520 541 658
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex gap-16 justify-center sm:items-center lg:p-0 sm:mx-10 sm:mt-5">
        <div className="flex lg:mb-0 sm:mb-5">
          <div>
            <img className="mr-10" src={img1} alt="" />
          </div>
          <div>
            <p className="text-xl font-bold uppercase">Fast delivery</p>
            <p>Within 30 minutes</p>
          </div>
        </div>
        <div className="flex lg:mb-0 sm:mb-5">
          <div>
            <img className="mr-5" src={img2} alt="" />
          </div>
          <div>
            <p className="text-xl font-bold uppercase">Absolute Dining</p>
            <p>Best buffet restaurant</p>
          </div>
        </div>
        <div className="flex lg:mb-0 sm:mb-5">
          <div>
            <img className="mr-10" src={img3} alt="" />
          </div>
          <div>
            <p className="text-xl font-bold uppercase">Pickup delivery</p>
            <p>Grab your food order</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
