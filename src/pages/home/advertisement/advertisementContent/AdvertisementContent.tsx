import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Ri24HoursFill } from "react-icons/ri";
const AdvertisementContent = () => {
  return (
    <div className="mb-48 flex justify-center items-center gap-5">
      <div className="card bg-[#FFE47F] w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-5xl">
            <LiaShippingFastSolid />
          </h2>
          <p className="text-2xl font-extrabold">Free Shipping</p>
          <p className="">Order over 500$</p>
        </div>
      </div>
      <div className="card bg-[#E9EFFC] w-96  shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-5xl">
            <MdOutlinePayment />
          </h2>
          <p className="text-2xl font-extrabold">Quick Payment</p>
          <p className="">100% Secure</p>
        </div>
      </div>
      <div className="card bg-[#EBD3C5] w-96  shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-5xl">
            <AiOutlineDollarCircle />
          </h2>
          <p className="text-2xl font-extrabold">Big Cashback</p>
          <p className="">Over 40% Cashback</p>
        </div>
      </div>
      <div className="card bg-[#EAEED6] w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-5xl">
            <Ri24HoursFill />
          </h2>
          <p className="text-2xl font-extrabold">24/7 Support</p>
          <p className="">Ready For You</p>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementContent;
