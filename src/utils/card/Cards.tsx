import { Link } from "react-router-dom";

interface Keyboard {
  _id: string;
  image: string;
  title: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
}

const Cards = ({ keyboard }: { keyboard: Keyboard }) => {
  console.log(keyboard);

  return (
    <div className="border-2 rounded-lg p-5">
      <img
        className="rounded-md w-[500px] h-[300px]"
        src={keyboard?.image}
        alt={keyboard.title}
      />
      <div className="h-[180px]">
        <h2 className="font-bold text-xl">{keyboard.title}</h2>
        <p>Brand: {keyboard.brand}</p>
        <p>Available Quantity: {keyboard.quantity}</p>
        <p className="text-xl text-[#FA4F09] font-bold">{keyboard.price}$</p>
        <p className="mb-3">Rating: {keyboard.rating} stars</p>
      </div>
      <hr className="border-2" />
      <div className="mt-3 w-full">
        <Link to={`/products/${keyboard._id}`}>
          <button className="btn-main w-full">
            <span>See details</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
