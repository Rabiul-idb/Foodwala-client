import { useContext, useState } from "react";
import { contextProvider } from "../AuthContex/AuthContex";
import { useLoaderData } from "react-router-dom";
import MyFoodItem from "../Components/MyFoodItem";

const MyFoods = () => {
  const { user } = useContext(contextProvider);

  const myFoodItems = useLoaderData();
  //console.log(myFoodItems)
  const [foods, setFoods] = useState(myFoodItems);

  return (
    <div className="bg-[#fef5ee]">
      <div className="w-11/12 mx-auto pb-7">
        <span className="md:text-xl text-lg font-bold font-lobster text-red-600 pt-3 text-center block">
          My Foods
        </span>
        <h2 className="md:text-2xl text-xl font-semibold text-black text-center mt-2 mb-1">
          My Food Items
        </h2>

        <table className="min-w-full table-auto border-collapse border border-gray-300 my-10">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Image
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Origin
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Available Qty
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Price
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {foods.map((item) => (
              <MyFoodItem
                item={item}
                foods={foods}
                setFoods={setFoods}
              ></MyFoodItem>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFoods;
