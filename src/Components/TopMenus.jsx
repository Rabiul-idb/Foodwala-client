import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import { Link } from "react-router-dom";


const TopMenus = () => {

    const [topFoods, setTopFoods] = useState([]);

    useEffect(() =>{
        fetch('https://foodwala-server.vercel.app/topFoodItems')
        .then(response => response.json())
        .then(data => setTopFoods(data))
    }, [])

    return (
        <div className="w-11/12 mx-auto">
             <span className='text-xl font-bold font-lobster text-red-600 mt-3 text-center block'>Top Menus</span>
            <h2 className="text-2xl font-semibold text-black text-center mt-2 mb-1">Our Top Menu</h2>
            <p className="text-base text-center">
                Our top menu is a selection of our most popular dishes, carefully crafted to <br></br> showcase the best of
                our culinary expertise. 
            </p>
            <div className="grid grid-cols-3 gap-6 my-10">
                {
                    topFoods.map(item => <FoodItem
                    item ={item}
                    ></FoodItem>)
                }
            </div>
            <Link to={'/allFoods'} className="btn bg-red-600 hover:bg-red-700 text-white text-lg mt-4 mb-14 block w-fit pt-2 mx-auto">See All Foods</Link>
        </div>
    );
};

export default TopMenus;
