import backgroundImage from "../../assets/images/restaurant/f909efb883f56845dcebe7cdc85a607c.jfif";
import clockImage from "../../assets/images/restaurant/clock-Vector.png";
import phoneImage from "../../assets/images/restaurant/PhoneVector.png";
import messageImage from "../../assets/images/restaurant/messageVector.png";
import locationImage from "../../assets/images/restaurant/locationVector.png";
import facebookImg from "../../assets/images/restaurant/facebook.png";
import linkedInImg from "../../assets/images/restaurant/linkedIn.png";
import twitterImg from "../../assets/images/restaurant/twitter.png";
import instagram from "../../assets/images/restaurant/instagram.png";
const Footer = () => {
  return (
    <footer>
      <div>
        <div
          className="hero lg:min-h-[720px] min-h-[999px]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="text-white">
              <h1 className="lg:mb-5 lg:text-4xl  sm:text-3xl lg:-mt-60 -mt-96 font-bold">
                We ready to have you the best dining experiences
              </h1>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 lg:gap-40 sm:grid-cols-1 text-white algin items-center text-center  lg:mt-0 mt-52 font-bold">
            <div className="">
              <img className="mx-auto lg:mb-5 mb-2" src={clockImage} alt="" />
              <h3 className="text-xl lg:mb-5 mb-2 uppercase">Opening Hours</h3>
              <p>Monday-Sunday</p>
              <p>9.00 AM to 11:30 PM </p>
            </div>
            <div className="">
              <img className="mx-auto lg:mb-5 mb-3 lg:mt-0 mt-3" src={phoneImage} alt="" />
              <h3 className="text-xl mb-5 uppercase">Opening Hours</h3>
              <p>Monday-Sunday</p>
              <p>9.00 AM to 11:30 PM </p>
            </div>
            <div>
              <img className="mx-auto mb-5 lg:mt-0 mt-3" src={messageImage} alt="" />
              <h3 className="text-xl mb-5 uppercase">Opening Hours</h3>
              <p>Monday-Sunday</p>
              <p>9.00 AM to 11:30 PM </p>
            </div>
            <div>
              <img className="mx-auto mb-5 lg:mt-0 mt-3" src={locationImage} alt="" />
              <h3 className="text-xl mb-5 uppercase">Opening Hours</h3>
              <p>Monday-Sunday</p>
              <p>9.00 AM to 11:30 PM </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 lg:-mt-40 -mt-24 justify-center">
          <img src={facebookImg} alt="" />
          <img src={twitterImg} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedInImg} alt="" />
        </div>
        <div className="text-center text-white">
          <p>
          © 2023 All Rights Reserved 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
