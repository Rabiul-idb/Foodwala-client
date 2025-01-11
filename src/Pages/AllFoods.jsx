import { useContext, useEffect, useState } from "react";
import { contextProvider } from "../AuthContex/AuthContex";
import FoodItem from "../Components/FoodItem";
import { useLoaderData } from "react-router-dom";

const AllFoods = () => {
  //const {} = useContext(contextProvider);

  const allData = useLoaderData();
  //console.log(allData)
  const [allFoodData, setAllFoodData] = useState(allData);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = (e)=>{
    setSelectedValue(e.target.value);
}

useEffect(() => {
  if (selectedValue === "decending") {
    const sortedData = [...allData].sort((a, b) => b.foodPrice - a.foodPrice);
    setAllFoodData(sortedData);
  } else if (selectedValue === "acending") {
    const sortedData = [...allData].sort((a, b) => a.foodPrice - b.foodPrice);
    setAllFoodData(sortedData);
  } else if (selectedValue === "avaiQty") {
    const sortedData = [...allData].sort((a, b) => b.foodQty - a.foodQty);
    setAllFoodData(sortedData);
  } else if (selectedValue === "default") {
    setAllFoodData(allData);
  }
}, [selectedValue, allData]);

  return (
    <div className="bg-[#fef5ee]">
      <div className="w-11/12 mx-auto pb-7">
        <span className="md:text-xl text-lg font-bold font-lobster text-red-600 pt-3 text-center block">
          All Foods
        </span>
        <h2 className="md:text-2xl text-xl font-semibold text-black text-center mt-2 mb-1">
          All Foods Menu
        </h2>
        <p className="text-base text-center">
          Our top menu is a selection of our most popular dishes, carefully
          crafted to <br className="hidden sm:block"></br> showcase the best of
          our culinary expertise.
        </p>
        <div
          // onClick={handleSortByPrice}
          title="sort by "
          className="text-right mb-5"
        >
          <span className="">Short by Price:</span>
          <select
            value={selectedValue}
            onChange={handleSelect}
            name=""
            className="border px-2 py-1 ml-2"
            id=""
          >
            <option value="default">Default</option>
            <option value="decending">High to low</option>
            <option value="acending">Low to High</option>
            <option value="avaiQty">Available Qty.</option>
          </select>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 my-10">
          {allFoodData.map((item) => (
            <FoodItem item={item}></FoodItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
