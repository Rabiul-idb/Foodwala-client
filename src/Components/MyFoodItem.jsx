import { CiEdit } from "react-icons/ci";
import { FcViewDetails } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";


const MyFoodItem = ({item}) => {
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
                    <div>
                        <Link
                        to={`/food/foodDetails/${_id}`}
                        className="btn text-green-500 text-lg btn-link"
                        title="Food Details"
                        >
                        <FcViewDetails />
                        </Link>
                        <Link
                        // to={`/updateEquipment/${item?._id}`}
                        className="btn text-blue-800 text-lg btn-link"
                        title="edit"
                        >
                        <CiEdit />
                        </Link>
                        <button
                        // onClick={() => handleDelete(item?._id)}
                        className="btn text-red-500 text-lg btn-link"
                        title="delete"
                        >
                        <RiDeleteBin6Line />
                        </button>
                    </div>
                </div>
            </div>
            <p className="font-bold text-base bg-red-600 text-white px-2 absolute top-6 right-5 hidden price">Price: {foodPrice}$</p>
        </div>
    );
};

export default MyFoodItem;