import { useContext, useState } from "react";
import { contextProvider } from "../AuthContex/AuthContex";
import FoodItem from "../Components/FoodItem";
import { useLoaderData } from "react-router-dom";


const AllFoods = () => {

    //const {} = useContext(contextProvider);

    const allData = useLoaderData();
    //console.log(allData)
    const [allFoodData, setAllFoodData] = useState(allData)
    

    return (
        <div className="bg-[#fef5ee]">
            <div className="w-11/12 mx-auto pb-7">
                <span className='text-xl font-bold font-lobster text-red-600 pt-3 text-center block'>All Foods</span>
                <h2 className="text-2xl font-semibold text-black text-center mt-2 mb-1">All Foods Menu</h2>
                <p className="text-base text-center">
                    Our top menu is a selection of our most popular dishes, carefully crafted to <br></br> showcase the best of
                    our culinary expertise. 
                </p>
                <div className="grid grid-cols-3 gap-6 my-10">
                    {
                        allFoodData.map(item => <FoodItem
                        item ={item}
                        ></FoodItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFoods;