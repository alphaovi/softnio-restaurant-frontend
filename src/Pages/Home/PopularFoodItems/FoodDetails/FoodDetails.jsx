const FoodDetails = ({ food }) => {
  const { name, about, img } = food;
  return (
    <div className="p-8 text-black border border-white-500 mx-2 bg-white">
      <img
        src={food.img}
        alt={food.name}
        className="w-full h-40 object-cover mt-2 rounded-lg border-b-2 border-red-600 text-gray-800 pb-1"
      />

      <h3 className="text-lg font-bold">{food.name}</h3>
      <p className="text-black">{food.about}</p>
    </div>
  );
};

export default FoodDetails;
