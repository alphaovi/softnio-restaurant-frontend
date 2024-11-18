import PopularFoodItem from "../PopularFoodItem/PopularFoodItem";

const PopularFoodItems = () => {
  return (
    <section className="bg-slate-100">
      <div className="text-left lg:pt-0 pt-4">
        <div className="flex items-center gap-2 lg:px-20 lg:ml-0 sm:ml-10">
          <p className="w-1 h-1 bg-[#BD1F17] p-1 shadow-lg"></p>
          <p className="text-[#BD1F17] text-xl font-bold ">
            Crispy, Every Bite Taste
          </p>
        </div>
        <p className="lg:text-4xl sm:text-xl font-bold uppercase text-black lg:px-20 px-12">
          Popular Food items
        </p>
      </div>
      <div className="">
        <PopularFoodItem></PopularFoodItem>
      </div>
    </section>
  );
};

export default PopularFoodItems;
 