import Container from "../../../utils/container/Container";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { IconType } from "react-icons";
import {
  FaRegCheckCircle,
  FaTruck,
  FaMoneyCheckAlt,
  FaUndoAlt,
  FaTags,
  FaGift,
  FaLock,
} from "react-icons/fa";
import { MdOutlinePriceChange, MdOutlinePayment } from "react-icons/md";

type TAbout = {
  name: string;
  description: string;
  icon: IconType;
};

const aboutContents = [
  {
    name: "Expert Team",
    icon: FaRegCheckCircle,
    description: "Our team consists of industry-certified professionals.",
  },
  {
    name: "Competitive Pricing",
    icon: MdOutlinePriceChange,
    description:
      "We offer value for money with competitive pricing on all products and services.",
  },
  {
    name: "Fast & Secure Payments",
    icon: MdOutlinePayment,
    description:
      "Experience quick and secure payment options tailored for your convenience.",
  },
  {
    name: "Complimentary Shipping",
    icon: FaTruck,
    description: "Enjoy free shipping on orders exceeding a specific amount.",
  },
  {
    name: "Cashback Rewards",
    icon: FaMoneyCheckAlt,
    description: "Receive cashback on every purchase you make with us.",
  },
  {
    name: "Extended Product Warranty",
    icon: FaMoneyCheckAlt,
    description: "Benefit from extended warranty coverage on all our products.",
  },
  {
    name: "Simple Returns",
    icon: FaUndoAlt,
    description:
      "Enjoy a stress-free returns process within the allowed timeframe.",
  },
  {
    name: "Special Discounts",
    icon: FaTags,
    description: "Unlock special discounts and exclusive offers.",
  },
  {
    name: "Loyalty Program",
    icon: FaGift,
    description: "Earn points and rewards with our customer loyalty program.",
  },
  {
    name: "Secure Payment Gateway",
    icon: FaLock,
    description:
      "Your payments are protected with our state-of-the-art security.",
  },
];

const AboutUs = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="mt-20 mb-20 flex justify-center items-center">
        <span className="title-icon"></span>
        <h2 className="mx-10 lg:mx-20 text-xl lg:text-4xl font-extrabold mt-2">
          About US
        </h2>
        <span className="title-icon"></span>
      </div>
      <Container>
        <div className="flex justify-center items-center gap-5  lg:flex-row flex-col p-5 lg:p-0">
          <div className="border-2 my-12 flex-1 p-3">
            <img src="https://i.imgur.com/LHUYxUz.png" alt="" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-5">Repairs are our Passion</h1>
            <p>
              Our expertise in mechanical keyboards ensures that your
              high-performance peripherals are always in top condition. We
              understand the intricate details and precision required to
              maintain and repair these devices. Whether it's key switches, RGB
              lighting, or firmware updates, our team is equipped with the
              skills and knowledge to handle all your mechanical keyboard needs.
              Trust us to keep your typing experience smooth and responsive.
            </p>
          </div>
        </div>

        <div className="md:grid-cols-5 grid gap-5 grid-cols-1 mt-16 p-5 lg:p-0">
          {aboutContents.map((service: TAbout, index: number) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="text-center bg-[#f8f6fc] rounded-md p-3 shadow-md"
            >
              <div className="flex items-center justify-center">
                <service.icon className="mb-2 text-center text-xl" />
              </div>

              <h2 className="mb-1 text-lg ">{service?.name}</h2>
              <p className="mb-2 text-sm w-10/12 mx-auto text-gray-400">
                {service?.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
