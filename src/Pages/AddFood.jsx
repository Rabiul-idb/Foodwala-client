import { useContext, useState } from "react";
import { contextProvider } from "../AuthContex/AuthContex";
import Swal from "sweetalert2";


const AddFood = () => {

    const {user} = useContext(contextProvider);
    const [selectedOption, setSelectedOption] = useState("");

    const handleOnChange = (e)=>{
        setSelectedOption(e.target.value);
    }

    const handleAddFood = (e)=>{
        e.preventDefault();

        const form = e.target;

        const foodName = form.foodName.value;
        const foodCategory = form.foodCategory.value;
        const foodPrice = form.foodPrice.value;
        const foodQty = form.foodQty.value;
        const foodOrigin = selectedOption;
        const foodImg = form.foodImg.value;
        const foodDesc = form.foodDesc.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;

        const newItem = {foodName, foodCategory, foodPrice, foodQty, foodOrigin, foodImg, foodDesc, userName, userEmail};
        console.log(newItem);

        fetch('http://localhost:5000/addFood',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                  title: 'Success!',
                  text: 'Food Item Added Successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
                form.reset();
              }
        })

    }

    return (
        <div>
            <h2 className="text-2xl font-semibold text-black text-center my-6">Add Food with the required field</h2>
            <form onSubmit={handleAddFood} className="max-w-5xl mx-auto p-6 bg-gray-100 shadow-lg border rounded-md space-y-4 mb-5">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
          {/* Food name */}
          <div>
            <label className="">Food Name:</label>
            <br></br>
            <input
              type="text"
              name="foodName"
              placeholder="Food Name" required
              className="input input-bordered border-red-600 w-full mt-1 "
            />
          </div>
          {/* Food category */}
          <div>
            <label className="">Food Category:</label>
            <br></br>
            <input
              type="text"
              name="foodCategory"
              placeholder="Food Category" required
              className="input input-bordered border-red-600 w-full mt-1 "
            />
          </div>
          {/* Food Price */}
          <div>
            <label className="">Food Price($):</label>
            <br></br>
            <input
              type="text"
              name="foodPrice"
              placeholder="Food Price" required
              className="input input-bordered border-red-600 w-full mt-1 "
            />
          </div>
          {/* Food quantity */}
          <div>
            <label className="">Food Quantity:</label>
            <br></br>
            <input
              type="number"
              name="foodQty"
              placeholder="Food Quantity" required
              className="input input-bordered border-red-600 w-full mt-1 "
            />
          </div>
        </div>
        <div>
            <label className="">Food Origin:</label>
            <br></br>
            <select onChange={handleOnChange} value={selectedOption} className="input input-bordered border-red-600 w-full mt-1">
                <option selected value="bangladeshi">Bangladeshi</option>
                <option value="asian">Asian</option>
                <option value="indian">Indian</option>
                <option value="italian">Italy</option>
            </select>
        </div>
        {/* food Image URL */}
        <div>
          <label className="">Food Image Link:</label>
          <br></br>
          <input
            type="text"
            name="foodImg"
            placeholder="Food Image URL" required
            className="input input-bordered border-red-600 w-full mt-1 "
          />
        </div>
        {/* food Description */}
        <div>
          <label className="">Food Description:</label>
          <br></br>
          <textarea
            type="text"
            name="foodDesc"
            placeholder="Food Description" required
            className="input input-bordered border-red-600 w-full mt-1 "
          />
        </div>
        
       <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
 
            {/*User Name*/}
            <div>
            <label className="">Added By:</label>
            <br></br>
            <input
                type="text"
                name="userName"
                readOnly
                value={user?.displayName}
                className="input bg-gray-100 input-bordered border-red-600 w-full mt-1 "
            />
            </div>
            {/*User Email*/}
            <div>
            <label className="">User Email:</label>
            <br></br>
            <input
                type="email"
                name="userEmail"
                readOnly
                value={user?.email}
                className="input bg-gray-100 input-bordered border-red-600 w-full mt-1 "
            />
            </div>
       </div>
        <div>
          <button className="btn bg-red-600 text-white hover:bg-red-700 block mx-auto px-10 text-lg font-semibold mt-5">Add Food</button>
        </div>
      </form>
        </div>
    );
};

export default AddFood;