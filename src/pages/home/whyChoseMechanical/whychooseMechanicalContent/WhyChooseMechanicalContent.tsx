import { BiSolidCustomize } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdKeyboardAlt } from "react-icons/md";

const WhyChooseMechanicalContent = () => {
  return (
    <div className="mb-12 lg:mb-48 flex justify-center items-center gap-5 flex-col lg:flex-row">
      <div className="card bg-[#FFE47F] w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-5xl">
            <IoShieldCheckmarkSharp />
          </h2>
          <p className="text-2xl font-extrabold">Durability & Longevity</p>
          <p className="">
            Mechanical keyboards are built to last, with individual mechanical
            switches rated for tens of millions of keystrokes.
          </p>
        </div>
      </div>
      <div className="card bg-[#E9EFFC] w-96  shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-5xl">
            <FaClock />
          </h2>
          <p className="text-2xl font-extrabold">Faster Accurate Typing</p>
          <p className="">
            Mechanical keyboards can help improve typing speed and accuracy due
            to the precise actuation of each key.
          </p>
        </div>
      </div>
      <div className="card bg-[#EBD3C5] w-96  shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-5xl">
            <BiSolidCustomize />
          </h2>
          <p className="text-2xl font-extrabold">Customization Options</p>
          <p className="">
            Mechanical keyboards offer a wide range of customization options,
            including key switch types, keycap designs.
          </p>
        </div>
      </div>
      <div className="card bg-[#EAEED6] w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-5xl">
            <MdKeyboardAlt />
          </h2>
          <p className="text-2xl font-extrabold">
            Better for Gaming and typing
          </p>
          <p className="">
            Many gamers prefer mechanical keyboards due to their fast response
            times and durability under heavy use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMechanicalContent;
