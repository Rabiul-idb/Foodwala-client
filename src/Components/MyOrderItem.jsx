import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";


const MyOrderItem = ({item, orders, setOrders}) => {

    const {_id, foodName, foodImg, foodPrice, totalPrice, availableQty, orderQty, buyerName, buyerEmail, foodOwner, foodOwnerEmail, orderedTime} = item || {};

    // delete order from database
    const handleDeleteOrder = (id)=>{
        //console.log(id);
        
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
              fetch(`https://foodwala-server.vercel.app/myOrders/${id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                 // console.log(data);
                  if (data.deletedCount > 0) {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your Order has been deleted.",
                      icon: "success",
                    });
                    const remainingOrders = orders.filter(
                      (e) => e._id !== id
                    );
                    setOrders(remainingOrders);
                  }
                });
            }
          });
    }

    return (
        <div className="border rounded-xl p-5 shadow relative foodCard hover:shadow-lg duration-300">
            <img src={foodImg} className="w-full rounded-xl object-cover hover:scale-105 duration-500" alt="" />
            <div className="px-2">
                <h2 className="font-bold text-xl my-3 ">{foodName}</h2>
                <p className="font-semibold text-base">Food Price: <span className="">{foodPrice}</span></p>
                <p className="font-semibold text-base">Total Price: {totalPrice}</p>
                <p className="font-semibold text-base">Ordered Qty: {orderQty}</p>
                <p className="font-semibold text-base">Owner: {foodOwner}</p>
                <p className="font-semibold text-base">Time: {orderedTime}</p>
            
                <button
                onClick={() => handleDeleteOrder(_id)}
                className="btn text-red-500 btn-sm md:text-lg border border-red-600 mt-3"
                title="delete"
                > Delete
                <RiDeleteBin6Line />
                </button>
                    
                
            </div>
           
        </div>
    );
};

export default MyOrderItem;