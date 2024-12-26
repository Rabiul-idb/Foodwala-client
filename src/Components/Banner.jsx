import { Link } from 'react-router-dom';
import bannerImg from '../assets/images/bannerImg.png';

const Banner = () => {
    return (
        <div className=" bg-banner-bg bg-no-repeat bg-cover bg-center">
            <div className="w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1 justify-center items-center py-5">
                <div className="banner-content text-center lg:text-left">
                    <span className='text-lg lg:text-xl font-bold font-lobster text-red-600 '>Offer from us</span>
                    <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold leading-tight mt-5">Lettuce with <span className='text-red-600 underline'>Chicken</span> <br className=''></br> Chopped Salad</h1>
                    <p className="lg:text-lg text-base font-base mt-3"> A deliciously grilled dish consisting of two perfectly cooked chops, garnished with fresh herbs with healthy salad made with a mix of fresh vegetables, including cucumber slices. 
                    </p>
                    <Link to={"/allFoods"} className='btn sm:text-lg bg-red-600 text-white mt-6 px-8 hover:bg-red-700'>view all</Link>
                </div>
                <div className="banner-img text-center mx-auto lg:text-left">
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;