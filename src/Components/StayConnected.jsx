import stayBanner from "../assets/images/ad-ban-bg.png";

const StayConnected = () => {
    return (
        <div className="relative">
            <img src={stayBanner} alt="" />
            <div className="absolute top-0 left-0 w-full h-full pt-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-16">
                    <div>
                        <h2 className="text-3xl text-black font-bold mb-4">Stay Informed About Special Offers</h2>
                        <p className="text-black text-lg mb-4">For Exclusive Deals, Coupons, News and More!</p>
                    </div>
                    <div className="">
                        <input type="email"
                        className="input w-3/5 bg-white text-red-600 pr-12 rounded-none"
                        placeholder="Enter your Email" />
                        <button className="btn bg-red-600 hover:bg-red-700 rounded-none text-white text-lg">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StayConnected;