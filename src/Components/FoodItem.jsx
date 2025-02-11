import { Link } from "react-router-dom";


const FoodItem = ({item}) => {

    const {_id, foodPrice, foodName, foodImg, foodOrigin, foodQty} = item || {};
    return (
        <div className="border rounded-xl p-3 shadow relative foodCard ">
            <img src={foodImg} className="w-full md:h-[320px] sm:h-[250px] rounded-xl object-cover hover:scale-105 duration-500" alt="" />
            <div className="px-2">
                <h2 className="font-bold text-xl mt-3 ">{foodName}</h2>
                <div className="flex justify-between items-center flex-wrap gap-6 mt-3">
                    <div>
                        <p className="font-semibold text-base">Origin: {foodOrigin}</p>
                        <p className="font-semibold text-base">Available Qty: {foodQty}</p>
                    </div>
                    <Link to={`/food/foodDetails/${_id}`} className="btn lg:text-lg bg-red-600 text-white hover:bg-red-700">View Details</Link>
                </div>
            </div>
            <p className="font-bold text-base bg-red-600 text-white px-2 absolute top-6 right-5 hidden price">Price: {foodPrice}$</p>
        </div>
    );
};

export default FoodItem;