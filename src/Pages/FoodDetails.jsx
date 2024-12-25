import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { contextProvider } from "../AuthContex/AuthContex";


const FoodDetails = () => {

    const {totalPurchased, setTotalPurchased} = useContext(contextProvider);

    const {_id, foodName, foodOrigin, foodPrice, foodQty, foodDesc, foodImg, foodCategory, purchased} = useLoaderData();
    setTotalPurchased(purchased);

    const navigate = useNavigate();
    
    return (
        <div className="bg-[#fef5ee] py-5">
            <div className="w-11/12 mx-auto">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 border border-red-600 p-5 rounded-lg">
                    <div>
                        <img src={foodImg} alt="food" className="w-full object-cover rounded-lg"/>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-700">{foodName}</h2>
                        <p className="text-lg font-semibold text-gray-600 mt-5">Item Code: <span className="text-red-600">{_id}</span></p>
                        <p className="text-lg font-semibold text-gray-600">Origin: <span className="text-red-600">{foodOrigin}</span></p>
                        <p className="text-lg font-semibold text-gray-600">Category: <span className="text-red-600">{foodCategory}</span></p>
                        <p className="text-lg font-semibold text-gray-600">Price: <span className="text-red-600">{foodPrice}$</span></p>
                        <p className="text-lg font-semibold text-gray-600">Available Quantity: <span className="text-red-600">{foodQty}</span></p>
                        <p className="text-lg font-semibold text-gray-600">Total Purchased: <span className="text-red-600">{totalPurchased} times</span></p>
                        <p className="text-lg font-medium text-gray-600 mt-6 mb-10 ">{foodDesc}</p>
                        <Link to={`/purchase/${_id}`} className="btn bg-red-600 hover:bg-red-700 text-lg text-white">Purchase</Link>
                        <button onClick={()=> navigate(-1)} className="btn  text-lg ml-6">Go back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;