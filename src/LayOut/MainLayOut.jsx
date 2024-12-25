import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import StayConnected from "../Components/StayConnected";


const MainLayOut = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <StayConnected></StayConnected>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;