import { Link } from "react-router-dom";
import aboutImg from "../assets/images/abt.png";
import buffet from "../assets/images/buffet.png";
import online from "../assets/images/online.png";
import { PiBowlFoodBold } from "react-icons/pi";
import { GrBusinessService } from "react-icons/gr";

const AboutUs = () => {
  return (
    <div className=" bg-[#fef5ee] py-5">
      <div className="w-11/12 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <span className="md:text-xl text-lg font-bold font-lobster text-red-600 pt-3 block">
            About Us
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome to Foodwala
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At Foodwala, we believe that great food has the power to bring
            people together and create unforgettable moments. Our mission is to
            connect food lovers with the finest culinary experiences, offering a
            seamless platform to explore, order, and savor mouthwatering dishes
            from the best local restaurants and kitchens.
          </p>
        </div>

        <div className=" grid gap-5 lg:grid-cols-2 grid-cols-1 items-center">
          <figure>
            <img src={aboutImg} alt="" />
          </figure>
          <div>
            <div className="max-w-4xl mx-auto mt-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Founded with a passion for food and community, Foodwala was
                created to make dining more convenient, diverse, and enjoyable.
                Whether you're craving traditional comfort food, international
                cuisines, or healthy options, Foodwala is here to bring your
                favorite flavors right to your doorstep.
              </p>
            </div>
            <div className="max-w-4xl mx-auto mt-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Why Choose Us?
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <span className="font-semibold">Diverse Options:</span> A
                  curated selection of dishes from top eateries.
                </li>
                <li>
                  <span className="font-semibold">Quality First:</span> We
                  partner with trusted restaurants to ensure every bite meets
                  your expectations.
                </li>
                <li>
                  <span className="font-semibold">Seamless Experience:</span>{" "}
                  From browsing menus to timely delivery, we make every step
                  effortless.
                </li>
              </ul>
            </div>
            <div className="max-w-4xl mx-auto mt-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Commitment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Food is more than just sustenance—it's an experience, a memory,
                and a connection. At Foodwala, we’re dedicated to enhancing your
                food journey by providing exceptional service, ensuring quality,
                and embracing the joy that great food brings to life.
              </p>
            </div>

            <div>
              <Link
                to={"/contact"}
                className="btn bg-red-600 text-white rounded-md text-lg mt-10 hover:bg-red-600 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="py-14">
          <span className="md:text-xl text-lg font-bold font-lobster text-red-600 text-center pt-3 block">
            Services
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Our Services
          </h2>
          <p className="text-gray-600 leading-relaxed text-center">
            We offer a wide range of services to cater to your needs. Our
            valuable services are:
          </p>
        </div>
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-8 pb-12">
          <div className="inline-flex gap-5">
            <figure className="p-3">
              <img src={buffet} alt="" />
            </figure>
            <div>
              <h4 className="text-black font-semibold text-lg mb-2">
                Buffet Service
              </h4>
              <p>
                Our buffet service offers a wide variety of dishes, including{" "}
                <br></br>vegetarian and non-vegetarian options.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-5">
            <figure className="p-3">
              <img src={online} alt="" />
            </figure>
            <div>
              <h4 className="text-black font-semibold text-lg mb-2">
                Online Service Service
              </h4>
              <p>
                Order online and get your food delivered right to your doorstep.{" "}
                <br></br>
                Enjoy your food and stay at your place.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-5">
            <figure className="p-3">
            <GrBusinessService className="text-red-600 text-3xl" />
            </figure>
            <div>
              <h4 className="text-black font-semibold text-lg mb-2">
                Our Catering Services
              </h4>
              <p>
                We offer a wide range of catering services, including{" "}
                <br></br>buffet, online, and more.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-5">
            <figure className="p-3">
            <PiBowlFoodBold className="text-3xl text-red-600" />
            </figure>
            <div>
              <h4 className="text-black font-semibold text-lg mb-2">
                Our Delivery Services
              </h4>
              <p>
                We offer a wide range of delivery services, including{" "}
                <br></br>buffet, online, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
