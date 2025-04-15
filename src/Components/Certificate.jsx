import foodCertificate from '../assets/images/foodCertificate.png';
import foodsafety from '../assets/images/food-safety.jpg';
import foodstore from '../assets/images/foodstore.png';
import organic from '../assets/images/organic.png';
import { Link } from 'react-router-dom';

const Certificate = () => {
  return (
    <div className='w-11/12 mx-auto py-20'>
        <div className=' grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-8 lg:gap-5 gap-6'>
      <div className="card bg-base-100 border-2 hover:shadow-lg">
        <figure className="xl:px-10 lg:px-5 px-3 pt-5 ">
          <img
            src={foodCertificate}
            alt=""
            className="rounded-xl h-[200px]"
          />
        </figure>
        <div className="card-body items-center text-center px-2">
          <h2 className="card-title">Food Law Certified</h2>
          <p>A Food Law Certificate ensures Foodwala's compliance with hygiene, safety and quality standards.</p>
          <div className="card-actions">
            <Link to={'/aboutUs'} className="btn btn-link hover:text-red-600">Discover</Link>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 border-2 hover:shadow-lg">
        <figure className="xl:px-10 lg:px-5 px-3 pt-5">
          <img
            src={foodsafety}
            alt=""
            className="rounded-xl h-[200px]"
          />
        </figure>
        <div className="card-body items-center text-center px-2">
          <h2 className="card-title">100% Safe and Healthy</h2>
          <p> Food safety ensures hygiene, prevents contamination, protects health, and promotes quality.</p>
          <div className="card-actions">
          <Link to={'/aboutUs'} className="btn btn-link hover:text-red-600">Discover</Link>
          </div>
        </div>
      </div>
      <div className="card bg-base-100  border-2 hover:shadow-lg">
        <figure className="xl:px-10 lg:px-5 px-3 pt-5">
          <img
            src={foodstore}
            alt=""
            className="rounded-xl h-[200px]"
          />
        </figure>
        <div className="card-body items-center text-center px-2">
          <h2 className="card-title">Food Production</h2>
          <p> Foodwala ensures growing, processing, and preparing food and quality to meet consumer demands.</p>
          <div className="card-actions">
          <Link to={'/aboutUs'} className="btn btn-link hover:text-red-600">Discover</Link>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 border-2 hover:shadow-lg">
        <figure className="xl:px-10 lg:px-5 px-3 pt-5">
          <img
            src={organic}
            alt=""
            className="rounded-xl h-[200px]"
          />
        </figure>
        <div className="card-body items-center text-center px-2">
          <h2 className="card-title">100% Organic & Natural</h2>
          <p> foodwala refers to products grown without synthetic chemicals, pesticides, and natural sources.</p>
          <div className="card-actions">
          <Link to={'/aboutUs'} className="btn btn-link hover:text-red-600">Discover</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Certificate;
