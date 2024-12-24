import { Link } from 'react-router-dom';
import bannerImg from '../assets/images/bannerImg.png';

const Banner = () => {
    return (
        <div className=" bg-banner-bg bg-no-repeat bg-cover bg-center">
            <div className="w-11/12 mx-auto grid grid-cols-2 items-center py-5">
                <div className="banner-content">
                    <span className='text-xl font-bold font-lobster text-red-600 '>Offer from us</span>
                    <h1 className="text-6xl font-bold leading-tight mt-5">Lettuce with <span className='text-red-600 underline'>Chicken</span> Chopped Salad</h1>
                    <p className="text-lg font-base mt-3"> A deliciously grilled dish consisting of two perfectly cooked chops, garnished with fresh herbs with healthy salad made with a mix of fresh vegetables, including cucumber slices. 
                    </p>
                    <Link to={"/allFoods"} className='btn text-lg bg-red-600 text-white mt-6 px-8 hover:bg-red-700'>view all</Link>
                </div>
                <div className="banner-img">
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;