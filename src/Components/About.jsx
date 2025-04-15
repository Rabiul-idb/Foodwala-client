
import { Link } from 'react-router-dom';
import aboutImg from '../assets/images/abt.png';
import buffet from '../assets/images/buffet.png';
import online from '../assets/images/online.png';

const About = () => {
    return (
        <div className=" bg-[#fef5ee] py-20">
            <div className="w-11/12 mx-auto grid gap-10 lg:grid-cols-2 grid-cols-1 items-center">
                <figure>
                    <img src={aboutImg} alt="about-img" className='w-full' />
                </figure>
                <div>
                    <span className='md:text-xl text-lg font-bold font-lobster text-red-600 pt-3 block'>About Us</span>
                    <h2 className="md:text-2xl text-xl font-semibold text-black mt-2 mb-1">Why We Are The Best</h2>
                    <p className='mt-3 mb-6'>
                    Founded with a passion for food and community, Foodwala was created to make dining more convenient, diverse, and enjoyable. Whether you're craving traditional comfort food, international cuisines, or healthy options, Foodwala is here to bring your favorite flavors right to your doorstep.
                    </p>
                    <div className='inline-flex gap-7 mb-5'>
                        <figure className='p-3'>
                            <img src={buffet} alt="" />
                        </figure>
                        <div>
                            <h4 className='text-black font-semibold text-lg'>Buffet Service</h4>
                            <p>
                                Our buffet service offers a wide variety of dishes, including <br></br>vegetarian and non-vegetarian options.
                            </p>
                        </div>
                    </div>
                    <div className='inline-flex gap-7'>
                        <figure className='p-3'>
                            <img src={online} alt="" />
                        </figure>
                        <div>
                            <h4 className='text-black font-semibold text-lg'>Online Service Service</h4>
                            <p>
                                Order online and get your food delivered right to your doorstep. <br></br>
                                Enjoy your food and stay at your place.
                            </p>
                        </div>
                    </div>
                    <div>
                    <Link to={"/aboutUs"} className='btn bg-red-600 text-white rounded-md text-lg mt-10 hover:bg-red-600 hover:text-white'>About Us</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;