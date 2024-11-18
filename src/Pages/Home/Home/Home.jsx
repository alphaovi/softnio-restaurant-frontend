import About from "../About/About/About";
import FullBanner from "../Banner/FullBanner";
import BookTable from "../BookTable/BookTable";
import PopularFoodItems from "../PopularFoodItems/PopularFoodItems/PopularFoodItems";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="text-white" >
      <FullBanner></FullBanner>
      <About></About>
      <PopularFoodItems></PopularFoodItems>
      <BookTable></BookTable>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
