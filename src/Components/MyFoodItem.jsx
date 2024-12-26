import { CiEdit } from "react-icons/ci";
import { FcViewDetails } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyFoodItem = ({item, foods, setFoods}) => {
    const {_id, foodPrice, foodName, foodImg, foodOrigin, foodQty} = item || {};

    //console.log(foods)

    const handleDelete = (id) => {
        // console.log(id);
         Swal.fire({
           title: "Are you sure?",
           text: "You won't be able to revert this!",
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Yes, delete it!",
         }).then((result) => {
           if (result.isConfirmed) {
             fetch(`https://foodwala-server.vercel.app/myFoods/${id}`, {
               method: "DELETE",
             })
               .then((res) => res.json())
               .then((data) => {
                // console.log(data);
                 if (data.deletedCount > 0) {
                   Swal.fire({
                     title: "Deleted!",
                     text: "Your Food has been deleted.",
                     icon: "success",
                   });
                   const remainingFoods = foods.filter(
                     (e) => e._id !== id
                   );
                   setFoods(remainingFoods);
                 }
               });
           }
         });
       };

    return (
        <div className="border rounded-xl p-5 shadow relative foodCard ">
            <img src={foodImg} className="w-full rounded-xl object-cover hover:scale-105 duration-500" alt="" />
            <div className="px-2">
                <h2 className="font-bold text-xl mt-3 ">{foodName}</h2>
                <div className="flex justify-between items-center flex-wrap gap-1 mt-3">
                    <div>
                        <p className="font-semibold text-base">Origin: {foodOrigin}</p>
                        <p className="font-semibold text-base">Available Qty: {foodQty}</p>
                    </div>
                    <div>
                        <Link
                        to={`/food/foodDetails/${_id}`}
                        className="btn text-green-500 text-lg btn-link "
                        title="Food Details"
                        >
                        <FcViewDetails />
                        </Link>
                        <Link
                         to={`/food/updateFoodInfo/${_id}`}
                        className="btn text-blue-800 text-lg btn-link"
                        title="edit"
                        >
                        <CiEdit />
                        </Link>
                        <button
                         onClick={() => handleDelete(_id)}
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