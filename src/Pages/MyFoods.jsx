import { useContext, useState } from "react";
import { contextProvider } from "../AuthContex/AuthContex";
import { useLoaderData } from "react-router-dom";
import MyFoodItem from "../Components/MyFoodItem";


const MyFoods = () => {

    const {user} = useContext(contextProvider);

    const myFoodItems = useLoaderData();
    //console.log(myFoodItems)
    const [foods, setFoods] = useState(myFoodItems);

    return (
        <div className="bg-[#fef5ee]">
            <div className="w-11/12 mx-auto pb-7">
                <span className='text-xl font-bold font-lobster text-red-600 pt-3 text-center block'>My Foods</span>
                <h2 className="text-2xl font-semibold text-black text-center mt-2 mb-1">My Food Items</h2>
                
                <div className="grid grid-cols-3 gap-6 my-10">
                    {
                        foods.map(item => <MyFoodItem
                             item={item} 
                             foods = {foods}
                             setFoods = {setFoods}
                             > 
                             </MyFoodItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyFoods;