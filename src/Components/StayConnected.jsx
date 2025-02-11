import stayBanner from "../assets/images/ad-ban-bg.png";
import { ToastContainer, toast } from 'react-toastify';

const StayConnected = () => {

    const handleSendEmail = (e) =>{
        e.preventDefault();
        toast("Your Email is sent successfully", {
            position: "top-center",
            autoClose: 3000,
        });
        e.target.reset();
    }
    return (
        <div className="relative">
            <img src={stayBanner} className="min-h-[220px] object-cover" alt="" />
            <div className="absolute top-0 left-0 w-full h-full lg:pt-14 pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center text-center gap-3 lg:px-16 sm:px-10 px-5">
                    <div>
                        <h2 className="lg:text-3xl md:text-2xl text-xl text-black font-bold lg:mb-4">Stay Informed About Special Offers</h2>
                        <p className="text-black lg:text-lg text-base lg:mb-4">For Exclusive Deals, Coupons, News and More!</p>
                    </div>
                    <form onSubmit={handleSendEmail}>
                        <input type="email"
                        className="input w-3/5 bg-white text-red-600 pr-12 rounded-none"
                        placeholder="Enter your Email" name="email"
                        required/>
                        <button className="btn bg-red-600 hover:bg-red-700 rounded-none text-white text-lg">Send</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default StayConnected;