import chikenImage from "../../../assets/images/restaurant/image 1.png";
import offerImage from "../../../assets/images/restaurant/Frame 1707478070.png";
const FullBanner = () => {
  return (
    <section
      className="mt-5"
      style={{
        background:
          "linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)",
      }}
    >
      <div className="container ">
        <div className=" lg:flex  lg:mx-20  lg:p-20 p-10 sm:p-10">
          <div>
            <h1
              className="lg:text-4xl text-2xl font-bold uppercase"
              style={{
                background:
                  "linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)",
              }}
            >
              Taste the authentic saudi cuisine
            </h1>

            <p className="mt-5">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <button className="btn btn-warning mt-5 uppercase mb-5 rounded-none">
              Explore Menu
            </button>
          </div>
          <div className="sm:w-full">
            <img src={chikenImage} alt="" />
          </div>
          <div>
            <img
              className="lg:w-28 w-16 absolute lg:-bottom-[60px] right-0 lg:mr-40 mr-16  ml-[200px] -mt-16 rounded-full bg-yellow-500 z-0 "
              src={offerImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullBanner;
