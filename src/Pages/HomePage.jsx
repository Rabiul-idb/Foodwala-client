import About from "../Components/About";
import Banner from "../Components/Banner";
import Certificate from "../Components/Certificate";
import StayConnected from "../Components/StayConnected";
import TopMenus from "../Components/TopMenus";


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Certificate></Certificate>
            <TopMenus></TopMenus>
            <About></About>
        </div>
    );
};

export default HomePage;