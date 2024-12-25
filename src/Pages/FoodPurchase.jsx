import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { contextProvider } from "../AuthContex/AuthContex";
import Swal from "sweetalert2";

const FoodPurchase = () => {

    const {user} = useContext(contextProvider);
    const navigate = useNavigate();

    const {_id, foodName, foodOrigin, foodPrice, foodQty, foodDesc, foodImg, foodCategory, purchased, userName, userEmail} = useLoaderData();

    const [qty, setQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleQty = (e) =>{
        const newQty = e.target.value;
        setQty(parseInt(newQty));
    }
    useEffect(() => {
        const price = parseInt(foodPrice); 
        setTotalPrice(price * qty); 
    }, [qty, foodPrice]);

    //console.log(qty, totalPrice);

    const handlePurchase = (e)=>{
        e.preventDefault();

        const form = e.target;
        const foodName = form.foodName.value;
        const foodPrice = form.foodPrice.value;
        //const totalPrice = totalPrice;
        const availableQty = form.availableQty.value;
        const orderQty = qty;
        const buyerName = form.userName.value;
        const buyerEmail = form.userEmail.value;
        const foodOwner = userName;
        const foodOwnerEmail = userEmail;
        const currentDate = new Date(); 
        const orderedTime = currentDate.toLocaleTimeString(); 

        const newOrder = {foodName, foodImg, foodPrice, totalPrice, availableQty, orderQty, buyerName, buyerEmail, foodOwner, foodOwnerEmail, orderedTime}
       // console.log(newOrder);

       if(availableQty === 0){
            Swal.fire({
                title: 'Sorry',
                text: 'This food is out of stock',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }
        if(orderQty > availableQty){
            Swal.fire({
                title: 'Sorry',
                text: 'You can only order up to ' + availableQty + ' quantity', 
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return; 
        }
        if(user?.email === foodOwnerEmail){
            Swal.fire({
                title: 'Sorry',
                text: 'You cannot order your own food',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }

        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newOrder),
        })
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            if (data.insertedId) {
                Swal.fire({
                  title: "Success!",
                  text: "You have Successfully Ordered",
                  icon: "success",
                  confirmButtonText: "Ok",
                });
                form.reset();
                navigate(`/myOrder/${buyerEmail}`)
              }
        })
    }

    


  return (
    <div className="bg-[#fef5ee] py-5">
      <h2 className="text-2xl font-semibold text-black text-center my-6">
        Purchase Food with the required field
      </h2>
      <form onSubmit={handlePurchase} className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg border rounded-md space-y-4 mb-5">
        <div className="flex flex-col space-y-2 gap-2">
          {/* Food name */}
          <div>
            <label className="">Food Name:</label>
            <br></br>
            <input
              type="text"
              name="foodName"
              value={foodName} readOnly
              placeholder="Food Name"
              required
              className="input input-bordered border-red-600 w-full mt-1 "
            />
          </div>
          {/* Food Price */}
          <div className="grid grid-cols-2 gap-6">
            <div>
                <label className="">Food Price($):</label>
                <br></br>
                <input
                type="text"
                name="foodPrice"
                value={foodPrice} readOnly
                placeholder="Food Price"
                required
                className="input input-bordered border-red-600 w-full mt-1 "
                />
            </div>

            <div>
                <label className="">Total Price($):</label>
                <br></br>
                <input
                type="text"
                name="totalPrice"
                value={totalPrice} readOnly
                placeholder="Total Price"
                required
                className="input input-bordered border-red-600 w-full mt-1 "
                />
            </div>
            
          </div>
          
          {/* Food quantity */}
          <div className="grid grid-cols-2 gap-6">
            <div>
                <label className="">Avilable Quantity:</label>
                <br></br>
                <input
                type="number"
                value={foodQty} readOnly
                name="availableQty"
                placeholder="Available Quantity"
                required
                className="input input-bordered border-red-600 w-full mt-1 "
                />
            </div>
            <div>
                <label className="">Order Quantity:</label>
                <br></br>
                <input
                type="number"
                onChange={handleQty}
                name="foodQty"
                placeholder="Order Quantity"
                required
                className="input input-bordered border-red-600 w-full mt-1 "
                />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
             {/*User Name*/}
            <div>
                <label className="">Buyer Name:</label>
                <br></br>
                <input
                type="text"
                name="userName"
                readOnly
                value={user?.displayName}
                className="input bg-gray-100 input-bordered border-red-600 w-full mt-1 "
                />
            </div>
             {/*Food Owner Name*/}
            <div>
                <label className="">Food Owner Name:</label>
                <br></br>
                <input
                type="text"
                name="foodOwner"
                readOnly
                value={userName}
                className="input bg-gray-100 input-bordered border-red-600 w-full mt-1 "
                />
            </div>
          </div>
          {/*User Email*/}
          <div>
            <label className="">Buyer Email:</label>
            <br></br>
            <input
              type="email"
              name="userEmail"
              readOnly
              value={user?.email}
              className="input bg-gray-100 input-bordered border-red-600 w-full mt-1 "
            />
          </div>
          <button className="btn text-lg text-white bg-red-600 hover:bg-red-700 block mx-auto">Purchase</button>


        </div>
      </form>
    </div>
  );
};

export default FoodPurchase;
