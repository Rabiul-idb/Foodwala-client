import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#fef5ee]">
      <footer className="footer text-base-content p-10 w-11/12 mx-auto">
        <aside className="gap-0">
          <img src={logo} className="w-[80px]" alt="" />
          <Link
            to={"/"}
            className="text-3xl font-bold text-red-600 font-lobster"
          >
            Foodwala
          </Link>
          <p className="">Providing the Best Services Since 2025</p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to={'/aboutUs'} className="link link-hover">Delivery System</Link>
          <Link to={'/aboutUs'} className="link link-hover">Certification</Link>
          <Link to={'/aboutUs'} className="link link-hover">Authentication</Link>
          <Link to={'/aboutUs'} className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Restaurant</h6>
          <Link to={'/aboutUs'} className="link link-hover">About us</Link>
          <Link to={'/contact'} className="link link-hover">Contact</Link>
          <a className="link link-hover">Organic Food</a>
          <Link to={'/allFoods'} className="link link-hover">Foods</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link to={'/contact'} className="link link-hover">Terms of use</Link>
          <Link to={'/contact'} className="link link-hover">Privacy policy</Link>
          <Link to={'/contact'} className="link link-hover">Cookie policy</Link>
        </nav>
      </footer>
      <div className="border-t py-7 border-gray-300">
        <p className="text-center text-sm text-gray-600 ">
          &copy; 2025 Foodwala. All rights reserved by MD. Rabiul Islam.
        </p>
      </div>
    </div>
  );
};

export default Footer;
