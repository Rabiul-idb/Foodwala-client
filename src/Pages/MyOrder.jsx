import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyOrderItem from "../Components/MyOrderItem";

const MyOrder = () => {

    const myOrders = useLoaderData();

    const [orders, setOrders] = useState(myOrders);
    //console.log(orders);

    return (
        <div className="bg-[#fef5ee]">
            <div className="w-11/12 mx-auto pb-7">
                <span className='md:text-xl text-lg font-bold font-lobster text-red-600 pt-3 text-center block'>My Orders</span>
                <h2 className="md:text-2xl text-xl font-semibold text-black text-center mt-2 mb-1">My Food Orders</h2>
                
                {
                    orders.length > 0 ? <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 my-10">
                    {
                        orders.map(item => <MyOrderItem
                             item={item} 
                             orders = {orders}
                             setOrders = {setOrders}
                             > 
                             </MyOrderItem> )
                    }
                </div>: <div className="text-3xl font-bold text-center text-red-600 pt-3">No Orders Found</div> 
                }
            </div>
        </div>
    );
};

export default MyOrder;