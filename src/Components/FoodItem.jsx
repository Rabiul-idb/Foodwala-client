import { Link } from "react-router-dom";


const FoodItem = ({item}) => {

    const {_id, foodPrice, foodName, foodImg, foodOrigin, foodQty} = item || {};
    return (
        <div className="border rounded-xl p-5 shadow relative foodCard ">
            <img src={foodImg} className="w-full rounded-xl object-cover hover:scale-105 duration-500" alt="" />
            <div className="px-2">
                <h2 className="font-bold text-xl mt-3 ">{foodName}</h2>
                <div className="flex justify-between items-center mt-3">
                    <div>
                        <p className="font-semibold text-base">Origin: {foodOrigin}</p>
                        <p className="font-semibold text-base">Available Qty: {foodQty}</p>
                    </div>
                    <Link to={`/food/foodDetails/${_id}`} className="btn text-lg bg-red-600 text-white hover:bg-red-700">Food Details</Link>
                </div>
            </div>
            <p className="font-bold text-base bg-red-600 text-white px-2 absolute top-6 right-5 hidden price">Price: {foodPrice}$</p>
        </div>
    );
};

export default FoodItem;