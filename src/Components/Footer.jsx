import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Footer = () => {
    return (
      <div className='bg-[#fef5ee]'>
          <footer className="footer text-base-content p-10 w-11/12 mx-auto">
        <aside className='gap-0'>
          <img src={logo} className='w-[80px]' alt="" />
          <Link to={"/"} className='text-3xl font-bold text-red-600 font-lobster'>Foodwala</Link>
          <p className=''>
            Providing the Best Services Since 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Delivery System</a>
          <a className="link link-hover">Certification</a>
          <a className="link link-hover">Authentication</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Restaurant</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Organic Food</a>
          <a className="link link-hover">Foods</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
        <div className='border-t py-7 border-gray-300'>
          <p className="text-center text-sm text-gray-600 ">
            &copy; 2024 Foodwala. All rights reserved by MD. Rabiul Islam.
          </p>
        </div>
      </div>
    );
};

export default Footer;